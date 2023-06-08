
const PopularInstructorCard = ({ instructor }) => {
    const {instructor_image, instructor_name, instructor_detail} = instructor;

    return (
        <div className="card w-full mx-auto bg-base-100 border rounded-none">
            <figure className="px-10 pt-10">
                <img src={instructor_image} alt="Shoes" className="w-48 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor_name}</h2>
                <p className="text-justify">{instructor_detail}</p>
            </div>
        </div>
    );
};

export default PopularInstructorCard;