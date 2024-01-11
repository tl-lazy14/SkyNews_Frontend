import { Outlet } from "react-router-dom";
import NavbarJournalist from "../../../components/AdminComponents/Navbar/NavbarJournalist";
import './Site.css';

const JournalistSite = ({ onLogout }) => {
    return (
        <>
            <div className="site">
                <NavbarJournalist onLogout={onLogout} />
                <Outlet />
            </div>
        </>
    );
}

export default JournalistSite;