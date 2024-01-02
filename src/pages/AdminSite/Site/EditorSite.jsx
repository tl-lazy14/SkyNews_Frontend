import { Outlet } from "react-router-dom";
import NavbarEditor from "../../../components/AdminComponents/Navbar/NavbarEditor";
import './Site.css';

const EditorSite = () => {
    return (
        <>
            <div className="site">
                <NavbarEditor />
                <Outlet />
            </div>
        </>
    );
}

export default EditorSite;