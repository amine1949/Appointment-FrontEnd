import { Outlet } from "react-router-dom";
import LayoutAdmin from "./Admin/LayoutAdmin";


const Admin = () => {
    return (
        <>
            <div className="flex w-full flex-col bg-muted/40 ">
                <LayoutAdmin />
                <Outlet />
            </div>
        </>
    );
}

export default Admin