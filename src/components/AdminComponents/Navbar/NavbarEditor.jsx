import './Navbar.css';
import WebLogo from '../../../assets/Sky-News-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faHourglassHalf, faKey, faNewspaper, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const NavbarEditor = () => {

    const path = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className="nav-bar-admin">
            <div className="logo">
                <img src={WebLogo} width={150} alt="logo" />
                <div className='site-name'>Editor Site</div>
            </div>
            <nav>
                <ul className="nav-bar-container">
                    <li>
                        <button 
                            onClick={() => navigate('/admin/editor/pending-articles')} 
                            className={`${path === '/admin/editor/pending-articles' || path.startsWith('/admin/editor/pending-articles/news') || path.startsWith('/admin/editor/pending-articles/edit-news') ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faHourglassHalf} />
                            <span>Tin chờ duyệt</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => navigate('/admin/editor/list-articles')} 
                            className={`${path === '/admin/editor/list-articles' || path.startsWith('/admin/editor/list-articles/news') || path.startsWith('/admin/editor/list-articles/edit-news') ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faNewspaper} />
                            <span>Quản lý tin tức</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => navigate('/admin/editor/change-password')} 
                            className={`${path === '/admin/editor/change-password' ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faKey} />
                            <span>Đổi mật khẩu</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="user-info">
                <div className="user-info-container">
                    <p style={{ color: 'black', fontWeight: '600' }} className='user-name'>Nguyễn Văn A</p>
                    <p style={{opacity: 0.8, fontSize: '14px'}} className='user-role'>Biên tập<span> - Thể thao</span></p>
                </div>
                <div className="log-out">
                    <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    );
};

export default NavbarEditor;