
const PopularInstructorCard = ({ instructor }) => {
    const { photoURL, name } = instructor;

    return (
        <div className="card w-full mx-auto bg-base-100 border rounded-none">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="Shoes" className="w-48 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default PopularInstructorCard;