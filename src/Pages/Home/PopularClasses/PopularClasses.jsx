import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";
import { Link } from "react-router-dom";

const PopularClasses = () => {

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://musical-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <div>
            <SectionTitle heading={"Popular Classes"} subHeading={"Begin Your Musical Journey With Us. Select Your Class and Enroll to get the best experience."}></SectionTitle>

            <div className="grid md:grid-cols-3 gap-8">
                {
                    classes.slice(0, 6).map(singleClass => <PopularClassesCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassesCard>)
                }
            </div>
            <div className="text-center mt-10">
                <Link to='/classes'><button
                    className="btn font-primary text-xl capitalize rounded-md bg-blue-950 border-black border-b-4  px-8 h-16 font-bold  hover:bg-white text-white ease-in duration-600 hover:text-blue-950 hover:border-black  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                > View All Classes
                </button></Link>
            </div>
        </div>
    );
};

export default PopularClasses;