import { useEffect } from "react";
import { useState } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";

const ClassesSection = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className="grid md:grid-cols-2 gap-3">
            {
                classes.map(singleClass => <ClassesCard
                    key={singleClass._id}
                    singleClass={singleClass}
                ></ClassesCard>)
            }
        </div>
    );
};

export default ClassesSection;