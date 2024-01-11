import Modal from 'react-modal';
import './RegisterForm.css';
import { useState } from 'react';
import Logo from "../../assets/Sky-News-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RegisterForm = ({ isModalOpen, setIsModalOpen, openLoginForm }) => {

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        verificationCode: '',
    });
    const [error, setError] = useState({
        errorUsername: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        errorVerificationCode: '',
    });
    const [showPassword, setShowPassword] = useState({
        showPassword: false,
        showRePassword: false,
    });
    const [isGettingCode, setIsGettingCode] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRegisterInfo({
            username: '',
            email: '',
            password: '',
            rePassword: '',
            verificationCode: '',
        });
        setError({
            errorUsername: '',
            errorEmail: '',
            errorPassword: '',
            errorRePassword: '',
            errorVerificationCode: '',
        })
        setShowPassword({
            showPassword: false,
            showRePassword: false,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let countErr = 0;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[`\~!@#\$%\^&\*\+\-',.<>\?\/;():"{}\|\\[\]]/;
        const alphanumericRegex = /^[0-9]+$/;

        if (registerInfo.username.trim() === '') {
            setError((prev) => ({...prev, errorUsername: 'Bạn chưa nhập tên tài khoản'}));
            countErr++;
        }
        else setError((prev) => ({...prev, errorUsername: ''}));

        if (registerInfo.email.trim() === '') {
            setError((prev) => ({...prev, errorEmail: 'Bạn chưa nhập email'}));
            countErr++;
        }
        else if (!emailRegex.test(registerInfo.email)) {
            setError((prev) => ({...prev, errorEmail: 'Email không hợp lệ'}));
            countErr++;
        }
        else setError((prev) => ({...prev, errorEmail: ''}));

        if (registerInfo.password.trim() === '') {
            setError((prev) => ({...prev, errorPassword: 'Bạn chưa nhập mật khẩu'}));
            countErr++;
        }
        else if (registerInfo.password.length < 6 || registerInfo.password.length > 14) {
            setError((prev) => ({...prev, errorPassword: 'Mật khẩu ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
            countErr++;
        }
        else if (specialCharRegex.test(registerInfo.password)) {
            setError((prev) => ({...prev, errorPassword: 'Mật khẩu chỉ được chứa ký tự chữ và số'}));
            countErr++;
        }
        else setError((prev) => ({...prev, errorPassword: ''}));

        if (registerInfo.rePassword.trim() === '') {
            setError((prev) => ({...prev, errorRePassword: 'Bạn chưa nhập lại mật khẩu'}));
            countErr++;
        }
        else if (registerInfo.rePassword.trim() !== registerInfo.password.trim()) {
            setError((prev) => ({...prev, errorRePassword: 'Mật khẩu nhập lại chưa chính xác'}));
            countErr++;
        }
        else setError((prev) => ({...prev, errorRePassword: ''}));

        if (registerInfo.verificationCode.trim() === '') {
            setError((prev) => ({...prev, errorVerificationCode: 'Bạn chưa nhập mã xác thực'}));
            countErr++;
        }
        else if (!alphanumericRegex.test(registerInfo.verificationCode)) {
            setError((prev) => ({...prev, errorVerificationCode: 'Mã xác thực chỉ chứa ký tự số'}));
            countErr++;
        }
        else if (registerInfo.verificationCode !== verificationCode) {
            setError((prev) => ({...prev, errorVerificationCode: 'Mã xác thực không đúng. Vui lòng thử lại.'}));
            countErr++;
        }
        else setError((prev) => ({...prev, errorVerificationCode: ''}));

        if (countErr > 0) return;
        else {
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.post('http://localhost:8080/skynews/api/v1/auth/register', {
                    username: registerInfo.username,
                    email: registerInfo.email,
                    password: registerInfo.password,
                    role: 'ROLE_USER',
                    editorCategory: ''
                });
                toast.success(`Đăng ký tài khoản thành công! Vui lòng đăng nhập.`, {
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: 'RegisterAccountToast',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                handleOpenLoginForm();
            } catch (err) {
                if (err.response && err.response.data && err.response.data.error) {
                    toast.error(`${err.response.data.error}`, {
                        position: toast.POSITION.TOP_RIGHT,
                        containerId: "RegisterAccountToast",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: false,
                        theme: 'colored',
                    });
                }
            }
        }
    }

    const getVerificationCode = async () => {
        try {
            const response = await axios.get("http://localhost:8080/skynews/api/v1/auth/generate-verification-code", {
                params: { email: registerInfo.email }
            });
            setVerificationCode(response.data.code);
        } catch (err) {
            console.log(err);
        }
    }
    
    const handleGetVerificationCode = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (registerInfo.email.trim() === '' || !emailRegex.test(registerInfo.email)) {
            setError((prev) => ({...prev, errorVerificationCode: 'Vui lòng nhập email hợp lệ để lấy mã'}));
            return;
        } else {
            setError((prev) => ({...prev, errorVerificationCode: ''}));
            getVerificationCode();
            toast.success('Mã xác thực đã được gửi tới email của bạn. Vui lòng kiểm tra hòm thư để lấy mã xác thực!', {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'RegisterAccountToast',
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            setIsGettingCode(true);
            setTimeout(() => {
                setIsGettingCode(false);
            }, 50000);
        }
    }

    const handleOpenLoginForm = () => {
        closeModal();
        openLoginForm();
    }

    return (
        <>
        <ToastContainer containerId="RegisterAccountToast" limit={1}/>
        <Modal
            className='register-form'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={true} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            <div className='logo'><img src={Logo} alt='logo' width={140} /></div>
            <div className='title'>Tạo tài khoản</div>
            <div className='register-container'>
                <form onSubmit={handleSubmit}>
                    <div className='field-container'>
                        <div>
                            <input
                                type='text'
                                className='input-field'
                                name='username'
                                placeholder='Tên tài khoản'
                                value={registerInfo.username}
                                onChange={handleInputChange}  
                                autoComplete='off'
                            />
                            <div className='error'>{error.errorUsername}</div>
                        </div>
                        <div>
                            <input
                                type='text'
                                className='input-field'
                                name='email'
                                placeholder='Email'
                                value={registerInfo.email}
                                onChange={handleInputChange}  
                                autoComplete='off'
                            />
                            <div className='error'>{error.errorEmail}</div>
                        </div>
                        <div className='password-field'>
                            <input
                                type={showPassword.showPassword ? 'text' : 'password'}
                                className='input-field'
                                name='password'
                                placeholder='Mật khẩu'
                                value={registerInfo.password}
                                onChange={handleInputChange}  
                            />
                            <FontAwesomeIcon className='icon' onClick={() => setShowPassword((prev) => ({...prev, showPassword: !showPassword.showPassword}))} icon={showPassword.showPassword ? faEye : faEyeSlash} />
                            <div className='error'>{error.errorPassword}</div>
                        </div>
                        <div className='password-field'>
                            <input
                                type={showPassword.showRePassword ? 'text' : 'password'}
                                className='input-field'
                                name='rePassword'
                                placeholder='Nhập lại mật khẩu'
                                value={registerInfo.rePassword}
                                onChange={handleInputChange}  
                            />
                            <FontAwesomeIcon className='icon' onClick={() => setShowPassword((prev) => ({...prev, showRePassword: !showPassword.showRePassword}))} icon={showPassword.showRePassword ? faEye : faEyeSlash} />
                            <div className='error'>{error.errorRePassword}</div>
                        </div>
                        <div className='verification-container'>
                            <div style={{ display: 'flex', gap: '20px'}}>
                                <div>
                                    <input
                                        type='text'
                                        className='input-field verification-code-field'
                                        name='verificationCode'
                                        placeholder='Mã xác thực'
                                        value={registerInfo.verificationCode}
                                        onChange={handleInputChange}  
                                        autoComplete='off'
                                    />
                                </div>
                                <div className={`get-verification-code-btn ${isGettingCode ? 'disabled-get-verification-btn' : ''}`} onClick={!isGettingCode ? handleGetVerificationCode : null}>Lấy mã</div>
                            </div>
                            <div className='error'>{error.errorVerificationCode}</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><button type='submit' className='submit-btn'>Tạo tài khoản</button></div>
                </form>
            </div>
            <div className='login-btn' onClick={handleOpenLoginForm}>Quay về đăng nhập</div>            
        </Modal>
        </>
    );
};

export default RegisterForm;