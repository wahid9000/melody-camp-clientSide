import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    console.log(instructors);
    useEffect(() => {
        fetch('https://musical-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        const popular = instructors.filter(i => i.role === 'instructor');
        setPopularInstructors(popular);
    }, [instructors])



    return (
        <div>

            <SectionTitle
                heading={"Popular Instructors"}
                subHeading={"We are proud of our instructors. They work hard for their students and thats what matters the most."}
            ></SectionTitle>


            <div className="grid md:grid-cols-3 gap-8">
                {
                    popularInstructors.slice(0, 6).map(instructor => <PopularInstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructorCard>)
                }
            </div>

            <div className="text-center mt-10">
                <Link to='/instructors'><button
                    className="btn font-primary text-xl capitalize rounded-md bg-blue-950 border-black border-b-4  px-8 h-16 font-bold  hover:bg-white text-white ease-in duration-600 hover:text-blue-950 hover:border-black  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                > View All Instructors
                </button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;