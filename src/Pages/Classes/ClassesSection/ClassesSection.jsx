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

    const [approvedClasses, setApprovedClasses] = useState([])
    useEffect( () => {
        const approved = classes.filter(c => c.status === 'Approved');
        setApprovedClasses(approved)
    } , [classes])
    console.log(approvedClasses);

    return (
        <div className="grid md:grid-cols-2 gap-3">
            {
                approvedClasses.map(singleClass => <ClassesCard
                    key={singleClass._id}
                    singleClass={singleClass}
                ></ClassesCard>)
            }
        </div>
    );
};

export default ClassesSection;