import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import useScrollTop from "../../../hooks/useScrollTop";

const Home = () => {
    const { pathName } = useLocation();
    useScrollTop(pathName);
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;