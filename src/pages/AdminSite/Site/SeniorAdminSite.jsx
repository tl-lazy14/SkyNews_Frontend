import { Outlet } from "react-router-dom";
import './Site.css';
import NavbarSeniorAdmin from "../../../components/AdminComponents/Navbar/NavbarSeniorAdmin";

const SeniorAdminSite = ({ onLogout }) => {
    return (
        <>
            <div className="site">
                <NavbarSeniorAdmin onLogout={onLogout} />
                <Outlet />
            </div>
        </>
    );
}

export default SeniorAdminSite;