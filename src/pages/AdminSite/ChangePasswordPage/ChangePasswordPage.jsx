import './ChangePasswordPage.css';
import { useState, useContext } from 'react';
import { UserContext } from '../../../components/userContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../components/axiosInterceptor';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {

    const accessToken = localStorage.getItem('accessToken');
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const [passwordField, setPasswordField] = useState({
        currentPassword: '',
        newPassword: '',
        newPasswordAgain: '',
    });
    const [error, setError] = useState({
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

    const handleChangePassword = async (e) => {
        e.preventDefault();
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
                    containerId: 'changePasswordToast',
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
                        containerId: "changePasswordToast",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: false,
                        theme: 'colored',
                    });
                }
            }
        }
    };

    return (
        <>
        <ToastContainer containerId="changePasswordToast" limit={1}/>
        <div className='change-password-page'>
            <div className="change-password-box">
                <h2 className="title">Đổi mật khẩu tài khoản</h2>
                <form onSubmit={handleChangePassword} className="change-psw-container">
                    <div className='field-container'>
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
                    <div className='field-container'>
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
                    <div className='field-container'>
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
                        <button className='submit-btn' type='submit'>Đổi mật khẩu</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};  

export default ChangePasswordPage;