import './Navbar.css';
import WebLogo from '../../../assets/Sky-News-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faKey, faNewspaper, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../userContext';

const NavbarJournalist = ({onLogout}) => {

    const { user } = useContext(UserContext);
    const path = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className="nav-bar-admin">
            <div className="logo">
                <img src={WebLogo} width={150} alt="logo" />
                <div className='site-name'>Journalist Site</div>
            </div>
            <nav>
                <ul className="nav-bar-container">
                    <li>
                        <button 
                            onClick={() => navigate('/admin/journalist/my-articles')} 
                            className={`${path === '/admin/journalist/my-articles' || path.startsWith('/admin/journalist/news') || path.startsWith('/admin/journalist/edit-news') ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faNewspaper} />
                            <span>Bài báo của tôi</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/admin/journalist/create-article')} className={`${path === '/admin/journalist/create-article' ? 'selected' : ''}`}>
                            <FontAwesomeIcon className="icon" icon={faPlus} />
                            <span>Tạo bài báo</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/admin/journalist/change-password')} className={`${path === '/admin/journalist/change-password' ? 'selected' : ''}`}>
                            <FontAwesomeIcon className="icon" icon={faKey} />
                            <span>Đổi mật khẩu</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="user-info">
                <div className="user-info-container">
                    <p style={{ color: 'black', fontWeight: '600' }} className='user-name'>{user.username}</p>
                    <p style={{opacity: 0.8, fontSize: '14px'}} className='user-role'>Người viết báo</p>
                </div>
                <div className="log-out">
                    <FontAwesomeIcon onClick={() => onLogout()} className="icon" icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    );
};

export default NavbarJournalist;