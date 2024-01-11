import './LoginForm.css';
import Logo from "../../assets/Sky-News-Logo.png";
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { UserContext } from '../userContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const { login } = useContext(UserContext);

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
                    role: 'ROLE_USER'
                });
                const user = response.data;
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('userID', user.id);
                login(user);
                toast.success('Đăng nhập thành công!', {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: "LoginUserToast",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: true,
                    theme: 'colored',
                });
                closeModal();
            } catch (err) {
                toast.error('Tài khoản hoặc mật khẩu không đúng. Vui lòng nhập lại', {
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "LoginUserToast",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: true,
                    theme: 'colored',
                });
                return;
            }
        }
    }

    const handleOpenRegisterForm = () => {
        closeModal();
        openRegisterForm();
    }

    return (
        <>
        <ToastContainer containerId="LoginUserToast" limit={1}/>
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
                            <FontAwesomeIcon className='icon' onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEye : faEyeSlash} />
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