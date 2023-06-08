import { useState } from "react";
import { useEffect } from "react";
import InstructorCards from "../InstructorsCard/InstructorCards";


const InstructorsSection = () => {

    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    instructors.map(instructor => <InstructorCards
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCards>)
                }
            </div>
        </div>
    );
};

export default InstructorsSection;