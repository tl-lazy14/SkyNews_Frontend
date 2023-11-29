import './Header.css';
import Logo from "../../assets/Sky-News-Logo.png";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from '../../utils/formatDateTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faClock, faEye, faFire, faMagnifyingGlass, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const Header = () => {

    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    const [searchKeyword, setSearchKeyword] = useState('');
    const [dropdownStates, setDropdownStates] = useState([
        false, // Chức năng người dùng
        false, // Thông báo
    ]);

    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

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

    return (
        <>
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
                <div className='login' onClick={() => setIsLoginFormOpen(true)}>
                        <FontAwesomeIcon className='icon' icon={faUser} /> <span>Đăng nhập</span>
                </div>
                {/* If logged in */}
                {/*
                <div className='myaccount-container'>
                    <div className='avatar'>M</div>
                    <div className='dropdown'>
                        <div className='handle-dropdown-account' onClick={() => toggleDropdown(0)}>
                            <div className='username'>lam2002ttb</div>
                            <div className='icon-dropdown'><FontAwesomeIcon className="icon" icon={faCaretDown} /></div>
                        </div>
                        {dropdownStates[0] && (
                        <div className='dropdown-content'>
                            <div className='item'>Tin đã lưu</div>
                            <div className='item'>Tin đã xem</div>
                            <div className='item'>Đăng xuất <FontAwesomeIcon className="icon" icon={faRightFromBracket} /></div>
                        </div>
                        )}
                    </div>
                </div>
                <div className='notification-container'>
                    <div className='handle-dropdown-notification' onClick={() => toggleDropdown(1)}>
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        <span className='num-new-notification'>2</span>
                    </div>
                    {dropdownStates[1] && (
                        <div className='dropdown-notification'>
                            <div className='item new-notification'>
                                <div className='notification-content'>
                                    <b>Huyhuy</b> thích ý kiến của bạn trong bài <b>Hôm nay Quốc hội chất vấn việc thực hiện lời hứa của các bộ trưởng</b>
                                </div>
                                <div className='timestamp'>12:24, 18/5/2021</div>
                            </div>
                            <div className='item'>
                                <div className='notification-content'>
                                    <b>Huyhuy</b> đã trả lời bạn trong bài <b>Hôm nay Quốc hội chất vấn việc thực hiện lời hứa của các bộ trưởng</b>
                                </div>
                                <div className='timestamp'>12:24, 18/5/2021</div>
                            </div>
                            <div className='item'>
                                <div className='notification-content'>
                                    <b>Huyhuy</b> thích ý kiến của bạn trong bài <b>Hôm nay Quốc hội chất vấn việc thực hiện lời hứa của các bộ trưởng</b>
                                </div>
                                <div className='timestamp'>12:24, 18/5/2021</div>
                            </div>
                        </div>
                        )}
                </div>
                */}
            </div>
        </header>
        </>
    );
};

export default Header;