import './Header.css';
import Logo from "../../assets/Sky-News-Logo.png";
import { useNavigate } from "react-router-dom";
import { getFormattedDate, getFormattedTimestampComment } from '../../utils/formatDateTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faClock, faEye, faFire, faMagnifyingGlass, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { UserContext } from '../userContext';
import api from '../axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const { user, logout } = useContext(UserContext);

    const accessToken = localStorage.getItem("accessToken");

    const [searchKeyword, setSearchKeyword] = useState('');
    const [dropdownStates, setDropdownStates] = useState([
        false, // Chức năng người dùng
        false, // Thông báo
    ]);

    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

    const [listNotification, setListNotification] = useState([]);
    const [numNewNotification, setNumNewNotification] = useState([]);

    const getListNotification = async () => {
        try {
            const response = await api.get(`/notification/get-list-notification/${user.id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            setListNotification(response.data);
            let num = 0;
            for (let x of response.data) {
                if (x.isNew === 1) num++;
            }
            setNumNewNotification(num);
        } catch (err) {
            console.log(err);
        }
    }

    const handleReadNotification = async (notification) => {
        try {
            if (notification.isNew === 1) {
                await api.put(`/notification/read-notification/${notification.id}`, notification.id, {
                    headers: { token: `Bearer ${accessToken}` }
                });
            }
            getListNotification();
            if (notification.type === 'like-comment') {
                navigate(`/news/${notification.likeComment.comment.article.id}#${notification.likeComment.comment.id}`)
            } else if (notification.type === 'reply-comment') {
                navigate(`/news/${notification.replyComment.article.id}#${notification.replyComment.id}`)
            }
            toggleDropdown(1);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchKeyword.trim() !== '') navigate(`/search?q=${searchKeyword}`);
    }

    const toggleDropdown = (index) => {
        const newDropdownStates = dropdownStates.map((state, i) => {
            if (i === index) {
              return !state;
            } else {
              return false;
            }
        });
        setDropdownStates(newDropdownStates);
    };

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
    }

    const openRegisterForm = () => {
        setIsRegisterFormOpen(true);
    }

    const handleLogout = async () => {
        try {
            await api.post(`/auth/logout`, user.id, {
                headers: { token: `Bearer ${accessToken}` },
            });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userID');
            toast.success('Đăng xuất thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "LoginUserToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
                theme: 'colored',
            });
            navigate('/');
            logout();
          } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user && accessToken) {
            getListNotification();
        }
    }, []);

    return (
        <>
        <ToastContainer containerId="LogoutToast" limit={1}/>
        <RegisterForm isModalOpen={isRegisterFormOpen} setIsModalOpen={setIsRegisterFormOpen} openLoginForm={openLoginForm} />
        <LoginForm isModalOpen={isLoginFormOpen} setIsModalOpen={setIsLoginFormOpen} openRegisterForm={openRegisterForm} />
        <header>
            <div className='container'>
                <div onClick={() => navigate("/")} className='logo'>
                    <img src={Logo} alt='logo' width={150} />
                </div>
                <div className='date'>
                    {getFormattedDate()}
                </div>
                <div className='type-news-container'>
                    <div className={`type-news ${currentPath === '/newest' ? 'selected-type-news' : ''}`} onClick={() => navigate('/newest')}>
                        <FontAwesomeIcon className='icon' icon={faClock} /> Mới nhất
                    </div>
                    <div className={`type-news ${currentPath === '/most-view' ? 'selected-type-news' : ''}`} onClick={() => navigate('/most-view')}>
                        <FontAwesomeIcon className='icon' icon={faEye} /> Xem nhiều
                    </div>
                    <div className={`type-news ${currentPath === '/hot-news' ? 'selected-type-news' : ''}`} onClick={() => navigate('/hot-news')}>
                        <FontAwesomeIcon className='icon' icon={faFire} /> Tin nóng
                    </div>
                </div>
                <div className='search-container'>
                    <form onSubmit={handleSubmit}>
                        <button type='submit'><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></button>
                        <input
                            type="text"
                            value={searchKeyword}
                            placeholder="Tìm kiếm" 
                            onChange={handleSearchInputChange}
                            autoComplete='off'
                        />
                    </form>
                </div>
                {/* If not logged in */}
                {(!user || !accessToken) && (
                <div className='login' onClick={() => setIsLoginFormOpen(true)}>
                        <FontAwesomeIcon className='icon' icon={faUser} /> <span>Đăng nhập</span>
                </div>
                )}
                {/* If logged in */}
                {user && accessToken && (
                <div className='myaccount-container'>
                    <div className='avatar'>{user.username[0].toUpperCase()}</div>
                    <div className='dropdown'>
                        <div className='handle-dropdown-account' onClick={() => toggleDropdown(0)}>
                            <div className='username'>{user.username}</div>
                            <div className='icon-dropdown'><FontAwesomeIcon className="icon" icon={faCaretDown} /></div>
                        </div>
                        {dropdownStates[0] && (
                        <div className='dropdown-content'>
                            <div className='item' onClick={() => navigate('/user/update-info-account')}>Cập nhật thông tin tài khoản</div>
                            <div className='item' onClick={() => navigate('/user/saved-news')}>Tin đã lưu</div>
                            <div className='item' onClick={() => navigate('/user/viewed-news')}>Tin đã xem</div>
                            <div className='item' onClick={() => handleLogout()}>Đăng xuất <FontAwesomeIcon className="icon" icon={faRightFromBracket} /></div>
                        </div>
                        )}
                    </div>
                </div>
                )}
                {user && accessToken && (
                <div className='notification-container'>
                    <div className='handle-dropdown-notification' onClick={() => toggleDropdown(1)}>
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        {numNewNotification > 0 && <span className='num-new-notification'>{numNewNotification}</span>}
                    </div>
                    {dropdownStates[1] && (
                        <div className='dropdown-notification'>
                            {listNotification.length > 0 && listNotification.map((notification, index) => (
                            <div key={index} onClick={() => handleReadNotification(notification)} className={notification.isNew === 1 ? 'item new-notification' : 'item'}>
                                <div className='notification-content'>
                                    {notification.type === 'like-comment' && (
                                    <>
                                        <b>{notification.likeComment?.liker?.name}</b> thích bình luận của bạn trong bài <b>{notification.likeComment?.comment?.article?.title}</b>
                                    </>
                                    )}
                                    {notification.type === 'reply-comment' && (
                                    <>
                                        <b>{notification.replyComment?.commenter?.name}</b> đã trả lời bình luận của bạn trong bài <b>{notification.replyComment?.article?.title}</b>
                                    </>
                                    )}
                                </div>
                                <div className='timestamp'>{getFormattedTimestampComment(new Date(notification.timestamp))}</div>
                            </div>
                            ))}
                        </div>
                    )}
                </div>
                )}
            </div>
        </header>
        </>
    );
};

export default Header;