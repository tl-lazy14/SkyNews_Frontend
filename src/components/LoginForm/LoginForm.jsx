import './LoginForm.css';
import Logo from "../../assets/Sky-News-Logo.png";
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ isModalOpen, setIsModalOpen, openRegisterForm }) => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
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

    const closeModal = () => {
        setIsModalOpen(false);
        setLoginInfo({
            email: '',
            password: '',
        });
        setError({
            errorEmail: '',
            errorPassword: '',
        })
        setShowPassword(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[`~' ()":{}|[\]]/;

        if (loginInfo.email.trim() === '') setError((prev) => ({...prev, errorEmail: 'Bạn chưa nhập email'}));
        else if (!emailRegex.test(loginInfo.email)) setError((prev) => ({...prev, errorEmail: 'Email không hợp lệ'}));
        else setError((prev) => ({...prev, errorEmail: ''}));

        if (loginInfo.password.trim() === '') setError((prev) => ({...prev, errorPassword: 'Bạn chưa nhập mật khẩu'}));
        else if (loginInfo.password.length < 6 || loginInfo.password.length > 14) setError((prev) => ({...prev, errorPassword: 'Mật khẩu ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
        else if (specialCharRegex.test(loginInfo.password)) setError((prev) => ({...prev, errorPassword: 'Mật khẩu không được chứa dấu tiếng Việt hoặc dấu cách'}));
        else setError((prev) => ({...prev, errorPassword: ''}));
    }

    const handleOpenRegisterForm = () => {
        closeModal();
        openRegisterForm();
    }

    return (
        <>
        <Modal 
            className='login-form'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={true} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            <div className='logo'><img src={Logo} alt='logo' width={160} /></div>
            <div className='title'>Đăng nhập</div>
            <div className='login-container'>
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
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><button type='submit' className='submit-btn'>Đăng nhập</button></div>
                </form>
            </div>
            <div className='note-service'>Bạn đăng nhập là đồng ý với <span style={{ color: '#04aa6d', textDecoration: 'underline' }}>điều khoản sử dụng</span> và <span style={{ color: '#04aa6d', textDecoration: 'underline' }}>chính sách bảo mật</span> của SkyNews</div>
            <div className='register-btn' onClick={handleOpenRegisterForm}>Tạo tài khoản</div>
        </Modal>
        </>
    );
};

export default LoginForm;