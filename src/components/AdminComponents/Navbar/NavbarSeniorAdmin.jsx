import './Navbar.css';
import WebLogo from '../../../assets/Sky-News-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faLayerGroup, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../userContext';

const NavbarSeniorAdmin = ({onLogout}) => {

    const { user } = useContext(UserContext);
    const path = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className="nav-bar-admin">
            <div className="logo">
                <img src={WebLogo} width={150} alt="logo" />
                <div className='site-name'>Senior Admin Site</div>
            </div>
            <nav>
                <ul className="nav-bar-container">
                    <li>
                        <button 
                            onClick={() => navigate('/admin/senior/account-management')} 
                            className={`${path === '/admin/senior/account-management' || path.startsWith('/admin/senior/create-user-account') ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faUsers} />
                            <span>Quản lý tài khoản</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => navigate('/admin/senior/category-topic')} 
                            className={`${path === '/admin/senior/category-topic' ? 'selected' : ''}`}
                        >
                            <FontAwesomeIcon className="icon" icon={faLayerGroup} />
                            <span>Quản lý danh mục</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="user-info">
                <div className="user-info-container">
                    <p style={{ color: 'black', fontWeight: '600' }} className='user-name'>{user.username}</p>
                    <p style={{opacity: 0.8, fontSize: '14px'}} className='user-role'>Quản trị viên cấp cao</p>
                </div>
                <div className="log-out">
                    <FontAwesomeIcon onClick={() => onLogout()} className="icon" icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    );
};

export default NavbarSeniorAdmin;