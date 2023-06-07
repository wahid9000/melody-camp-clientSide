
const PopularClassesCard = ({singleClass}) => {
    const {class_name, class_image} = singleClass;
    return (
        <div className="border flex-col h-fit px-10 py-5 w-full mx-auto group">
            <div className="border shadow-xl group-hover:scale-110 transition">
                <figure>
                <img src={class_image} alt="" />
                </figure>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-2xl font-semibold mb-4">{class_name}</h2>
                <button className="btn btn-warning bg-amber-300">View Details</button>
            </div>
        </div>
    );
};

export default PopularClassesCard;