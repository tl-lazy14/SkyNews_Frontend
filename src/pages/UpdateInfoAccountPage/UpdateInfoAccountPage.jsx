    import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Header from '../../components/Header/Header';
import './UpdateInfoAccountPage.css';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Illustration3 from "../../assets/illustration3.jpg";
import { UserContext } from '../../components/userContext';
import api from '../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateInfoAccountPage = () => {

    const { user, logout, changeUsername } = useContext(UserContext);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const [username, setUsername] = useState(user.username);
    const [passwordField, setPasswordField] = useState({
        currentPassword: '',
        newPassword: '',
        newPasswordAgain: '',
    });
    const [error, setError] = useState({
        username: '',
        currentPassword: '',
        newPassword: '',
        newPasswordAgain: '',
    });
    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        newPasswordAgain: false,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPasswordField((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleShowPassword = (passwordField, isShow) => {
        setShowPassword((prev) => ({
            ...prev,
            [passwordField]: !isShow,
        }));
    };

    const handleChangeUsername = async () => {
        let countErr = 0;
        if (username.trim() === '') {
            setError((prev) => ({...prev, username: 'Bạn chưa nhập tên người dùng'}));
            countErr++;
        } else if (username.trim() === user.username) {
            setError((prev) => ({...prev, username: 'Vui lòng nhập tên mới để đổi tên'}));
            countErr++;
        }
        else setError((prev) => ({...prev, username: ''}));

        if (countErr > 0) return;
        else {
            try {
                await api.put(`/user/change-username/${user.id}`, {
                    newUsername: username
                }, {
                    headers: { token: `Bearer ${accessToken}` },
                });
                toast.success('Đổi tên tài khoản thành công!', {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'updateInfoUserToast',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                changeUsername(username);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleChangePassword = async () => {
        let countError = 0;

        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[`\~!@#\$%\^&\*\+\-',.<>\?\/;():"{}\|\\[\]\s]/;

        if (passwordField.currentPassword.trim() === '') {
            setError((prev) => ({...prev, currentPassword: 'Bạn chưa nhập mật khẩu hiện tại'}));
            countError++;
        }
        else setError((prev) => ({...prev, currentPassword: ''}));

        if (passwordField.newPassword.trim() === '') {
            setError((prev) => ({...prev, newPassword: 'Bạn chưa nhập mật khẩu mới'}));
            countError++;
        }
        else if (passwordField.newPassword.length < 6 || passwordField.newPassword.length > 14) {
            setError((prev) => ({...prev, newPassword: 'Mật khẩu phải có ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
            countError++;
        }
        else if (specialCharRegex.test(passwordField.newPassword)) {
            setError((prev) => ({...prev, newPassword: 'Mật khẩu chỉ được chứa ký tự chữ và số'}));
            countError++;
        }
        else setError((prev) => ({...prev, newPassword: ''}));

        if (passwordField.newPasswordAgain.trim() === '') {
            setError((prev) => ({...prev, newPasswordAgain: 'Bạn chưa nhập lại mật khẩu'}));
            countError++;
        }
        else if (passwordField.newPasswordAgain.trim() !== passwordField.newPassword.trim()) {
            setError((prev) => ({...prev, newPasswordAgain: 'Mật khẩu nhập lại chưa chính xác'}));
            countError++;
        }
        else setError((prev) => ({...prev, newPasswordAgain: ''}));

        if (countError > 0) return;
        else {
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await api.put(`/auth/change-password/${user.id}`, {
                    currentPassword: passwordField.currentPassword,
                    newPassword: passwordField.newPassword,
                }, {
                    headers: { token: `Bearer ${accessToken}` },
                });
                toast.success('Đổi mật khẩu thành công! Vui lòng đăng nhập lại.', {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'updateInfoUserToast',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                setTimeout(handleLogout, 2000);
            } catch (err) {
                if (err.response && err.response.data && err.response.data.error) {
                    toast.error(`${err.response.data.error}`, {
                        position: toast.POSITION.TOP_RIGHT,
                        containerId: "updateInfoUserToast",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: false,
                        theme: 'colored',
                    });
                }
            }
        };
    };

    const handleLogout = async () => {
        try {
            await api.post(`/auth/logout`, user.id, {
                headers: { token: `Bearer ${accessToken}` },
            });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userID');
            navigate('/');
            logout();
          } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <ToastContainer containerId="updateInfoUserToast" limit={1}/>
        <div className='update-info-account-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Chỉnh sửa thông tin tài khoản</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
                    <div className='edit-container'>
                        <h2 className="title">Đổi tên tài khoản</h2>
                        <input
                            type='text'
                            className='text-input'
                            value={username}
                            placeholder='Tên tài khoản'
                            autoComplete='off'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className='error'>{error.username}</div>
                        <div className='submit-btn' onClick={() => handleChangeUsername()}>Cập nhật</div>
                        <div className='illustration'><img src={Illustration3} width={350} alt="" /></div>
                    </div>
                    <div className='edit-container'>
                        <h2 className="title">Đổi mật khẩu tài khoản</h2>
                        <div className='password-field'>
                            <div className='label'>Nhập mật khẩu hiện tại:</div>
                            <input
                                type={showPassword.currentPassword ? 'text' : 'password'}
                                className='text-input'
                                value={passwordField.currentPassword}
                                name='currentPassword'
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                            <FontAwesomeIcon className='icon-eye' onClick={() => handleShowPassword("currentPassword", showPassword.currentPassword)} icon={showPassword.currentPassword ? faEye : faEyeSlash} />
                            <div className='error'>{error.currentPassword}</div>
                        </div>
                        <div className='password-field'>
                            <div className='label'>Nhập mật khẩu mới:</div>
                            <input
                                type={showPassword.newPassword ? 'text' : 'password'}
                                className='text-input'
                                value={passwordField.newPassword}
                                name='newPassword'
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                            <FontAwesomeIcon className='icon-eye' onClick={() => handleShowPassword("newPassword", showPassword.newPassword)} icon={showPassword.newPassword ? faEye : faEyeSlash} />
                            <div className='error'>{error.newPassword}</div>
                        </div>
                        <div className='password-field'>
                            <div className='label'>Nhập lại mật khẩu mới:</div>
                            <input
                                type={showPassword.newPasswordAgain ? 'text' : 'password'}
                                className='text-input'
                                value={passwordField.newPasswordAgain}
                                name='newPasswordAgain'
                                autoComplete='off'
                                onChange={handleInputChange}
                            />
                            <FontAwesomeIcon className='icon-eye' onClick={() => handleShowPassword("newPasswordAgain", showPassword.newPasswordAgain)} icon={showPassword.newPasswordAgain ? faEye : faEyeSlash} />
                            <div className='error'>{error.newPasswordAgain}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='submit-btn' onClick={() => handleChangePassword()}>Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default UpdateInfoAccountPage;