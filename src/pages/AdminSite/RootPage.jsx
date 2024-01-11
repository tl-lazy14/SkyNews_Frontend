import SeniorAdminSite from "./Site/SeniorAdminSite";
import JournalistSite from "./Site/JournalistSite";
import EditorSite from "./Site/EditorSite";
import { useContext, useEffect } from "react";
import { UserContext } from "../../components/userContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../components/axiosInterceptor";

const RootPage = () => {

    const { user, logout } = useContext(UserContext);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    useEffect(() => {
        const hasJustLoggedIn = localStorage.getItem('hasJustLoggedIn');
        if (!user || !accessToken) {
            navigate('/admin/login');
        }
        else if (hasJustLoggedIn) {
            toast.success('Đăng nhập thành công!', {
                containerId: 'welcome',
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            localStorage.removeItem("hasJustLoggedIn");
        }
    }, [accessToken, navigate, user]);

    const handleLogout = async () => {
        try {
            await api.post(`/auth/logout`, user.id, {
                headers: { token: `Bearer ${accessToken}` },
            });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userID');
            logout();
            navigate('/admin/login');
          } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <ToastContainer containerId="welcome" limit={1}/>
            { user && user.role === 'ROLE_SENIOR_ADMIN' && <SeniorAdminSite onLogout={handleLogout} /> }
            { user && user.role === 'ROLE_JOURNALIST' && <JournalistSite onLogout={handleLogout} /> }
            { user && user.role === 'ROLE_EDITOR' && <EditorSite onLogout={handleLogout} /> }
        </>
    );
}

export default RootPage;