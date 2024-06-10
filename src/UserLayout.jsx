import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserLayout;