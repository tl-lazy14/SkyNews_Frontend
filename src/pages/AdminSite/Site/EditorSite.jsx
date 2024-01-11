import { Outlet } from "react-router-dom";
import NavbarEditor from "../../../components/AdminComponents/Navbar/NavbarEditor";
import './Site.css';

const EditorSite = ({ onLogout }) => {
    return (
        <>
            <div className="site">
                <NavbarEditor onLogout={onLogout} />
                <Outlet />
            </div>
        </>
    );
}

export default EditorSite;