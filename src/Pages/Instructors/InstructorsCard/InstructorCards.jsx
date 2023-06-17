
const InstructorCards = ({instructor}) => {
    const {name, photoURL, email} = instructor;
    return (
        <div className="border p-3 flex gap-5">
            <div>
                <img src={photoURL} className="w-44 rounded-xl" alt="" />
            </div>
            <div>
                <h2 className="font-bold text-xl font-primary">Profile Details</h2>
                <div className="divider w-40"></div> 
                <p>Name: <span className="font-semibold font-secondary">{name}</span></p>
                <p>Email: <span className="font-semibold font-secondary">{email}</span></p>
            </div>
        </div>
    );
};

export default InstructorCards;