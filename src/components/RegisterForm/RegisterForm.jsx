import Modal from 'react-modal';
import './RegisterForm.css';
import { useState } from 'react';
import Logo from "../../assets/Sky-News-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = ({ isModalOpen, setIsModalOpen, openLoginForm }) => {

    const [registerInfo, setRegisterInfo] = useState({
        email: '',
        password: '',
        rePassword: '',
        verificationCode: '',
    });
    const [error, setError] = useState({
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
            email: '',
            password: '',
            rePassword: '',
            verificationCode: '',
        });
        setError({
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[`~' ()":{}|[\]]/;
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;

        if (registerInfo.email.trim() === '') setError((prev) => ({...prev, errorEmail: 'Bạn chưa nhập email'}));
        else if (!emailRegex.test(registerInfo.email)) setError((prev) => ({...prev, errorEmail: 'Email không hợp lệ'}));
        else setError((prev) => ({...prev, errorEmail: ''}));

        if (registerInfo.password.trim() === '') setError((prev) => ({...prev, errorPassword: 'Bạn chưa nhập mật khẩu'}));
        else if (registerInfo.password.length < 6 || registerInfo.password.length > 14) setError((prev) => ({...prev, errorPassword: 'Mật khẩu ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
        else if (specialCharRegex.test(registerInfo.password)) setError((prev) => ({...prev, errorPassword: 'Mật khẩu không được chứa dấu tiếng Việt hoặc dấu cách'}));
        else setError((prev) => ({...prev, errorPassword: ''}));

        if (registerInfo.rePassword.trim() === '') setError((prev) => ({...prev, errorRePassword: 'Bạn chưa nhập lại mật khẩu'}));
        else if (registerInfo.rePassword.trim() !== registerInfo.password.trim()) setError((prev) => ({...prev, errorRePassword: 'Mật khẩu nhập lại chưa chính xác'}));
        else setError((prev) => ({...prev, errorRePassword: ''}));

        if (registerInfo.verificationCode.trim() === '') setError((prev) => ({...prev, errorVerificationCode: 'Bạn chưa nhập mã xác thực'}));
        else if (!alphanumericRegex.test(registerInfo.verificationCode)) setError((prev) => ({...prev, errorVerificationCode: 'Mã xác thực chỉ chứa ký tự chữ cái hoặc số'}));
        else setError((prev) => ({...prev, errorVerificationCode: ''}));
    }
    
    const handleGetVerificationCode = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (registerInfo.email.trim() === '' || !emailRegex.test(registerInfo.email)) {
            setError((prev) => ({...prev, errorVerificationCode: 'Vui lòng nhập email hợp lệ để lấy mã'}));
        } else {
            setError((prev) => ({...prev, errorVerificationCode: ''}));
            toast.success('Mã xác thực đã được gửi tới email của bạn. Vui lòng kiểm tra hòm thư để lấy mã xác thực!', {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'sendVerifyCodeToast',
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                style: {
                    color: 'white',
                    fontSize: '17px',
                    backgroundColor: 'green',
                },
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
        <ToastContainer containerId="sendVerifyCodeToast" limit={1}/>
        <Modal
            className='register-form'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={true} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            <div className='logo'><img src={Logo} alt='logo' width={160} /></div>
            <div className='title'>Tạo tài khoản</div>
            <div className='register-container'>
                <form onSubmit={handleSubmit}>
                    <div className='field-container'>
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
                            <FontAwesomeIcon className='icon' onClick={() => setShowPassword((prev) => ({...prev, showPassword: !showPassword.showPassword}))} icon={showPassword.showPassword ? faEyeSlash : faEye} />
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
                            <FontAwesomeIcon className='icon' onClick={() => setShowPassword((prev) => ({...prev, showRePassword: !showPassword.showRePassword}))} icon={showPassword.showRePassword ? faEyeSlash : faEye} />
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
            <div className='note-service'>Bạn tạo tài khoản là đồng ý với <span style={{ color: '#04aa6d', textDecoration: 'underline' }}>điều khoản sử dụng</span> và <span style={{ color: '#04aa6d', textDecoration: 'underline' }}>chính sách bảo mật</span> của SkyNews</div>
            <div className='login-btn' onClick={handleOpenLoginForm}>Quay về đăng nhập</div>            
        </Modal>
        </>
    );
};

export default RegisterForm;