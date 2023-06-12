import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";

const Home = () => {
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