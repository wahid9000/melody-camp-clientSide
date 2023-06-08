import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {

    const [classes, setClasses] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    } , [])

    return (
        <div>
            <SectionTitle heading={"Popular Classes"} subHeading={"Begin Your Musical Journey With Us. Select Your Class and Enroll to get the best experience."}></SectionTitle>

            <div className="grid md:grid-cols-3 gap-8">
                {
                    classes.map(singleClass => <PopularClassesCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;