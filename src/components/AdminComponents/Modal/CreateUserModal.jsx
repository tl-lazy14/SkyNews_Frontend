import { useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CreateUserModal = ({ isModalOpen, setIsModalOpen }) => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        editorCategory: '',
    });

    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nameRegex = /^[a-zA-Z ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂẰẮẶẲẴẠẢẤẦẬẨẪĨĐỆỘỔỖẸẺẼỀẾỂỄỈỊỌỎỐỒỔỖỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸàáâãèéêếìíòóôõùúăằắặẳẵạảấầậẩẫĩđệộổỗẹẻẽềếểễỷỹòỏốồổỗớờởỡợụủứừửữựỳỵỷỹ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[`\~!@#\$%\^&\*\+\-',.<>\?\/;():"{}\|\\[\]\s]/;

        if (userInfo.username.trim() === '') setError((prev) => ({...prev, username: 'Bạn chưa nhập tên người dùng'}));
        else if (!nameRegex.test(userInfo.username)) setError((prev) => ({...prev, username: 'Tên người dùng chỉ được chứa ký tự chữ cái và dấu cách'}));
        else setError((prev) => ({...prev, username: ''}));

        if (userInfo.email.trim() === '') setError((prev) => ({...prev, email: 'Bạn chưa nhập email'}));
        else if (!emailRegex.test(userInfo.email)) setError((prev) => ({...prev, email: 'Email không hợp lệ'}));
        else setError((prev) => ({...prev, email: ''}));

        if (userInfo.password.trim() === '') setError((prev) => ({...prev, password: 'Bạn chưa nhập mật khẩu'}));
        else if (userInfo.password.length < 6 || userInfo.password.length > 14) setError((prev) => ({...prev, password: 'Mật khẩu ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
        else if (specialCharRegex.test(userInfo.password)) setError((prev) => ({...prev, password: 'Mật khẩu chỉ được chứa ký tự chữ và số'}));
        else setError((prev) => ({...prev, password: ''}));

        if (userInfo.role === '') setError((prev) => ({...prev, role: 'Bạn chưa chọn vai trò của người dùng'}));
        else if (userInfo.role === 'editor' && userInfo.editorCategory === '') setError((prev) => ({...prev, role: 'Bạn chưa chọn danh mục quản lý của người dùng'}));
        else setError((prev) => ({...prev, role: ''}));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setUserInfo({
            username: '',
            email: '',
            password: '',
            role: '',
            editorCategory: '',
        });
        setError({
            username: '',
            email: '',
            password: '',
            role: '',
        });
        setShowPassword(false);
    };

    return (
        <>
        <Modal 
            className='create-user-modal'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={false} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            <h2 className="title">Tạo tài khoản người dùng</h2>
            <form onSubmit={handleSubmit}>
                <div className='field-container'>
                    <div className='label'>Tên người dùng:</div>
                    <input
                        type='text'
                        className='text-input'
                        value={userInfo.username}
                        name='username'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <div className='error'>{error.username}</div>
                </div>
                <div className='field-container'>
                    <div className='label'>Email:</div>
                    <input
                        type='text'
                        className='text-input'
                        value={userInfo.email}
                        name='email'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <div className='error'>{error.email}</div>
                </div>
                <div className='field-container password-field'>
                    <div className='label'>Mật khẩu:</div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='text-input'
                        value={userInfo.password}
                        name='password'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <FontAwesomeIcon className='icon-eye' onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEye : faEyeSlash} />
                    <div className='error'>{error.password}</div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='field-container'>
                            <div className='label'>Vai trò:</div>
                            <select value={userInfo.role} className='select-field' name='role' onChange={handleInputChange}>
                                <option value="">Lựa chọn vai trò</option>
                                <option value="journalist">Nhà báo</option>
                                <option value="editor">Biên tập viên</option>
                            </select>
                        </div>
                        { userInfo.role === 'editor' && (
                        <div className='field-container'>
                            <div className='label'>Danh mục quản lý:</div>
                            <select value={userInfo.editorCategory} className='select-field' name='editorCategory' onChange={handleInputChange}>
                                <option value="">Lựa chọn danh mục</option>
                                <option value="Thời sự">Thời sự</option>
                                <option value="Thế giới">Thế giới</option>
                                <option value="Kinh doanh">Kinh doanh</option>
                                <option value="Bất động sản">Bất động sản</option>
                                <option value="Khoa học">Khoa học</option>
                                <option value="Giải trí">Giải trí</option>
                                <option value="Thể thao">Thể thao</option>
                                <option value="Pháp luật">Pháp luật</option>
                                <option value="Giáo dục">Giáo dục</option>
                                <option value="Sức khỏe">Sức khỏe</option>
                                <option value="Đời sống">Đời sống</option>
                                <option value="Du lịch">Du lịch</option>
                                <option value="Số hóa">Số hóa</option>
                                <option value="Xe">Xe</option>
                                <option value="Thư giãn">Thư giãn</option>
                            </select>
                        </div>
                        )}
                    </div>
                    <div className='error'>{error.role}</div>
                </div>
                <div className='action-btn'>
                    <button onClick={closeModal}>Hủy</button>
                    <button type='submit'>Tạo</button>
                </div>
            </form>
        </Modal>
        </>
    );
};

export default CreateUserModal;