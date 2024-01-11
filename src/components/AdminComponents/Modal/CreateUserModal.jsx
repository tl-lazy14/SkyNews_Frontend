import { useEffect, useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import api from '../../axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateUserModal = ({ isModalOpen, setIsModalOpen, setRole, updateList }) => {

    const accessToken = localStorage.getItem("accessToken");

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
    const [listCategory, setListCategory] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const getListCategory = async () => {
        try {
            const response = await api.get("/category-topic/get-list-category", {
                headers: { token: `Bearer ${accessToken}` }
            });
            setListCategory(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getListCategory();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let countErr = 0;

        const nameRegex = /^[a-zA-Z ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂẰẮẶẲẴẠẢẤẦẬẨẪĨĐỆỘỔỖẸẺẼỀẾỂỄỈỊỌỎỐỒỔỖỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸàáâãèéêếìíòóôồọõùúăằắặẳẵạảấầậẩẫĩịđệộổỗẹẻẽềếểễỷỹòơỏốồổỗớờởỡợụủưứừửữựỳýỵỷỹ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // eslint-disable-next-line no-useless-escape
        const specialCharRegex = /[`\~!@#\$%\^&\*\+\-',.<>\?\/;():"{}\|\\[\]\s]/;

        if (userInfo.username.trim() === '') {
            setError((prev) => ({...prev, username: 'Bạn chưa nhập tên người dùng'}));
            countErr++;
        }
        else if (!nameRegex.test(userInfo.username)) {
            setError((prev) => ({...prev, username: 'Tên người dùng chỉ được chứa ký tự chữ cái và dấu cách'}));
            countErr++;
        }
        else setError((prev) => ({...prev, username: ''}));

        if (userInfo.email.trim() === '') {
            setError((prev) => ({...prev, email: 'Bạn chưa nhập email'}));
            countErr++;
        }
        else if (!emailRegex.test(userInfo.email)) {
            setError((prev) => ({...prev, email: 'Email không hợp lệ'}));
            countErr++;
        }
        else setError((prev) => ({...prev, email: ''}));

        if (userInfo.password.trim() === '') {
            setError((prev) => ({...prev, password: 'Bạn chưa nhập mật khẩu'}));
            countErr++;
        }
        else if (userInfo.password.length < 6 || userInfo.password.length > 14) {
            setError((prev) => ({...prev, password: 'Mật khẩu ít nhất 6 ký tự và nhỏ hơn 15 ký tự'}));
            countErr++;
        }
        else if (specialCharRegex.test(userInfo.password)) {
            setError((prev) => ({...prev, password: 'Mật khẩu chỉ được chứa ký tự chữ và số'}));
            countErr++;
        }
        else setError((prev) => ({...prev, password: ''}));

        if (userInfo.role === '') {
            setError((prev) => ({...prev, role: 'Bạn chưa chọn vai trò của người dùng'}));
            countErr++;
        }
        else if (userInfo.role === 'ROLE_EDITOR' && userInfo.editorCategory === '') {
            setError((prev) => ({...prev, role: 'Bạn chưa chọn danh mục quản lý của người dùng'}));
            countErr++;
        }
        else setError((prev) => ({...prev, role: ''}));

        if (countErr > 0) return;
        else {
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.post('http://localhost:8080/skynews/api/v1/auth/register', userInfo);
                setRole(userInfo.role);
                closeModal();
                toast.success(`Thêm người dùng thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleAddUserAdmin',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                updateList();
            } catch (err) {
                if (err.response && err.response.data && err.response.data.error) {
                    toast.error(`${err.response.data.error}`, {
                        position: toast.POSITION.TOP_RIGHT,
                        containerId: "handleAddUserAdmin",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: false,
                        theme: 'colored',
                    });
                }
            }
        }
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
        <ToastContainer containerId="handleAddUserAdmin" limit={1}/>
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
                                <option value="ROLE_JOURNALIST">Nhà báo</option>
                                <option value="ROLE_EDITOR">Biên tập viên</option>
                            </select>
                        </div>
                        { userInfo.role === 'ROLE_EDITOR' && (
                        <div className='field-container'>
                            <div className='label'>Danh mục quản lý:</div>
                            <select value={userInfo.editorCategory} className='select-field' name='editorCategory' onChange={handleInputChange}>
                                <option value="">Lựa chọn danh mục</option>
                                {listCategory.map((category, index) => (
                                <option key={index} value={category.name}>{category.name}</option>
                                ))}
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