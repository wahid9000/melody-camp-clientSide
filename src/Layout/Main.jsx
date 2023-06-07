import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <div className="min-h-screen">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


            <Toaster />
        </div>
    );
};

export default Main;