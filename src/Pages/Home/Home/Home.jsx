import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import useScrollTop from "../../../hooks/useScrollTop";
import AboutUs from "../AboutUs/AboutUs";
import './Home.css'

const Home = () => {
    const { pathName } = useLocation();
    useScrollTop(pathName);
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto">
                <PopularClasses></PopularClasses>
            </div>
            <div className="instructor-bg h-full md:h-[1020px]">
                <div className="w-9/12 mx-auto">
                    <PopularInstructors></PopularInstructors>
                </div>
            </div>
            <div className="mt-12">
                <AboutUs></AboutUs>
            </div>

            <div className="w-11/12 md:w-full mx-auto">
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;