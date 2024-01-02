import { Outlet } from "react-router-dom";
import './Site.css';
import NavbarSeniorAdmin from "../../../components/AdminComponents/Navbar/NavbarSeniorAdmin";

const SeniorAdminSite = () => {
    return (
        <>
            <div className="site">
                <NavbarSeniorAdmin />
                <Outlet />
            </div>
        </>
    );
}

export default SeniorAdminSite;