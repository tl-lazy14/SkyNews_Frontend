import './LoginForm.css';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../userContext';
import axios from 'axios';

const LoginFormAdmin = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        role: 'ROLE_JOURNALIST',
    });
    const [error, setError] = useState({
        errorEmail: '',
        errorPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let countError = 0;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[`\~!@#\$%\^&\*\+\-',.<>\?\/;():"{}\|\\[\]\s]/;

        if (loginInfo.email.trim() === '') {
            countError++;
            setError((prev) => ({...prev, errorEmail: 'Bạn chưa nhập email'}));
        }
        else if (!emailRegex.test(loginInfo.email)) {
            countError++;
            setError((prev) => ({...prev, errorEmail: 'Email không hợp lệ'}));
        }
        else setError((prev) => ({...prev, errorEmail: ''}));

        if (loginInfo.password.trim() === '') {
            countError++;
            setError((prev) => ({...prev, errorPassword: 'Bạn chưa nhập mật khẩu'}));
        }
        else if (loginInfo.password.length < 6 || loginInfo.password.length > 14) {
            countError++;
            setError((prev) => ({...prev, errorPassword: 'Mật khẩu phải có ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
        }
        else if (specialCharRegex.test(loginInfo.password)) {
            countError++;
            setError((prev) => ({...prev, errorPassword: 'Mật khẩu chỉ được chứa ký tự chữ và số'}));
        }
        else setError((prev) => ({...prev, errorPassword: ''}));

        if (countError > 0) return;
        else {
            try {
                const response = await axios.post(`http://localhost:8080/skynews/api/v1/auth/login`, { 
                    email: loginInfo.email,
                    password: loginInfo.password, 
                    role: loginInfo.role
                });
                const user = response.data;
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('userID', user.id);
                localStorage.setItem('hasJustLoggedIn', 'true');
                login(user);
                if (user.role === 'ROLE_SENIOR_ADMIN') navigate('/admin/senior/account-management');
                else if (user.role === 'ROLE_JOURNALIST') navigate('/admin/journalist/my-articles');
                else if (user.role === 'ROLE_EDITOR') navigate('/admin/editor/pending-articles');
            } catch (err) {
                toast.error('Tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại', {
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "incorrect",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: true,
                    theme: 'colored',
                });
                return;
            }
        }
    }

    return (
        <>
        <div className="login-form-admin">
            <ToastContainer containerId="incorrect" limit={1}/>
            <form onSubmit={handleSubmit}>
                <div className='field-container'>
                    <div>
                        <input
                            type='text'
                            className='input-field'
                            name='email'
                            placeholder='Email'
                            value={loginInfo.email}
                            onChange={handleInputChange}  
                            autoComplete='off'
                        />
                        <div className='error'>{error.errorEmail}</div>
                    </div>
                    <div className='password-field'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='input-field'
                            name='password'
                            placeholder='Mật khẩu'
                            value={loginInfo.password}
                            onChange={handleInputChange}  
                        />
                        <FontAwesomeIcon className='icon' onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEye : faEyeSlash} />
                        <div className='error'>{error.errorPassword}</div>
                    </div>
                    <div className='select-role-field'>
                        <div className='label'>Vai trò của bạn:</div>
                        <div>
                            <select name='role' value={loginInfo.role} onChange={handleInputChange}>
                                <option value="ROLE_JOURNALIST">Nhà báo</option>
                                <option value="ROLE_EDITOR">Biên tập viên</option>
                                <option value="ROLE_SENIOR_ADMIN">Quản trị viên cấp cao</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><button type='submit' className='submit-btn'>Đăng nhập</button></div>
            </form>
        </div>
        </>
    );
};

export default LoginFormAdmin;