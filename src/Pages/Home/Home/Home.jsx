import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;