import './LoginPage.css';
import Logo from "../../../assets/Sky-News-Logo.png";
import Illustration1 from "../../../assets/illustration1.png";
import Illustration2 from "../../../assets/illustration2.png";
import LoginFormAdmin from '../../../components/AdminComponents/LoginForm/LoginForm';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../components/userContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const { user } = useContext(UserContext);

    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (user && accessToken) {
            if (user.role === 'ROLE_SENIOR_ADMIN') navigate('/admin/senior/account-management');
        } 
    }, [accessToken, navigate, user]);

    return (
        <div className="login-page-admin">
            <div className="left-container">
                <div className="logo-login-page">
                    <img src={Logo} width={190} alt="skynews-logo" />
                </div>
                <div className="web-name">
                    <h1>Online Newspaper System</h1>
                    <h2>Admin Site</h2>
                </div>
                <div className="illustration">
                    <div className="illu1"><img src={Illustration1} style={{width: "360px"}} alt="illustration" /></div>
                    <div className="illu2"><img src={Illustration2} style={{width: "360px"}} alt="illustration" /></div>
                </div>
                <div className="contact">
                    Terms and conditions | FAQs | Contact us
                </div>
            </div>
            <div className="right-container">
                <div className="web-logo">
                    <div><img src={Logo} width={160} alt="web-logo" /></div>
                    <div className='title'>Đăng nhập</div>
                </div>
                <LoginFormAdmin />
            </div>
        </div>
    );
}

export default LoginPage;