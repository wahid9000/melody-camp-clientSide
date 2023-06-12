import { useState } from "react";
import { useEffect } from "react";
import InstructorCards from "../InstructorsCard/InstructorCards";


const InstructorsSection = () => {

    const [instructors, setInstructors] = useState([])
    console.log(instructors);
    useEffect(() => {
        fetch('https://musical-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect( () => {
        const popular = instructors.filter(i => i.role === 'instructor');
        setPopularInstructors(popular);
    } , [instructors])


    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popularInstructors.map(instructor => <InstructorCards
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCards>)
                }
            </div>
        </div>
    );
};

export default InstructorsSection;