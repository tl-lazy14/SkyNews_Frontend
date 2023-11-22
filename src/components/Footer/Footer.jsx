import './Footer.css';
import Logo from "../../assets/Sky-News-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div><span>Báo điện tử</span></div>
                <div className='logo'><img src={Logo} alt='logo' width={150} /></div>
                <div className='media'>
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                    <FontAwesomeIcon className='icon' icon={faYoutube} />   
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;