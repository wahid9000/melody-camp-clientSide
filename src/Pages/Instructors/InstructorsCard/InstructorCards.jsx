
const InstructorCards = ({instructor}) => {
    const {instructor_name, instructor_email, instructor_image} = instructor;
    return (
        <div className="border p-3 flex gap-5">
            <div>
                <img src={instructor_image} className="w-44 rounded-xl" alt="" />
            </div>
            <div>
                <h2 className="font-bold text-xl">Profile Details</h2>
                <div className="divider w-40"></div> 
                <p>Name: <span className="font-semibold">{instructor_name}</span></p>
                <p>Email: <span className="font-semibold">{instructor_email}</span></p>
            </div>
        </div>
    );
};

export default InstructorCards;