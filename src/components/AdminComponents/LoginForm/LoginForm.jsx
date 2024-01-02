import './LoginForm.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginFormAdmin = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        role: 'Nhà báo',
    });
    const [error, setError] = useState({
        errorEmail: '',
        errorPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[`~' ()":{}|[\]]/;

        if (loginInfo.email.trim() === '') setError((prev) => ({...prev, errorEmail: 'Bạn chưa nhập email'}));
        else if (!emailRegex.test(loginInfo.email)) setError((prev) => ({...prev, errorEmail: 'Email không hợp lệ'}));
        else setError((prev) => ({...prev, errorEmail: ''}));

        if (loginInfo.password.trim() === '') setError((prev) => ({...prev, errorPassword: 'Bạn chưa nhập mật khẩu'}));
        else if (loginInfo.password.length < 6 || loginInfo.password.length > 14) setError((prev) => ({...prev, errorPassword: 'Mật khẩu phải có ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
        else if (specialCharRegex.test(loginInfo.password)) setError((prev) => ({...prev, errorPassword: 'Mật khẩu không được chứa dấu tiếng Việt hoặc dấu cách'}));
        else setError((prev) => ({...prev, errorPassword: ''}));
    }

    return (
        <>
        <div className="login-form-admin">
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
                        <FontAwesomeIcon className='icon' onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEyeSlash : faEye} />
                        <div className='error'>{error.errorPassword}</div>
                    </div>
                    <div className='select-role-field'>
                        <div className='label'>Vai trò của bạn:</div>
                        <div>
                            <select name='role' value={loginInfo.role} onChange={handleInputChange}>
                                <option value="Nhà báo">Nhà báo</option>
                                <option value="Biên tập viên">Biên tập viên</option>
                                <option value="Quản trị viên cấp cao">Quản trị viên cấp cao</option>
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