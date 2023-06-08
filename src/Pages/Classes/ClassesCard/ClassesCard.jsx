
const ClassesCard = ({singleClass}) => {
    const {class_image, class_name, available_seats, price, instructor_name} = singleClass;
    return (
        <div className="border py-8 px-2 md:flex justify-center items-center gap-5 group">
            <div className="mb-8">
                <img src={class_image} className="w-56 mx-auto rounded-xl group-hover:scale-110 transition" alt="" />
            </div>
            <div>
                <h2 className="font-bold text-xl">Details</h2>

                <div className="divider w-40"></div>

                <div className="flex justify-between items-center  gap-3">
                    <label>Name:</label>
                    <p className="font-semibold">{class_name}</p>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <label>Price:</label>
                    <p className="font-semibold">${price}</p>
                </div>
                <div className="flex justify-between items-center  gap-3">
                    <label>Available Seats:</label>
                    <p className="font-semibold">{available_seats}</p>
                </div>

                <div className="divider w-40"></div>

                <div className="flex gap-5">
                <label>Instructor:</label>
                    <p className="font-semibold">{instructor_name}</p>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-warning btn-sm bg-amber-300">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;