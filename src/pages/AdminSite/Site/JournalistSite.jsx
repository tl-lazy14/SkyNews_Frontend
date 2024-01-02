import { Outlet } from "react-router-dom";
import NavbarJournalist from "../../../components/AdminComponents/Navbar/NavbarJournalist";
import './Site.css';

const JournalistSite = () => {
    return (
        <>
            <div className="site">
                <NavbarJournalist />
                <Outlet />
            </div>
        </>
    );
}

export default JournalistSite;