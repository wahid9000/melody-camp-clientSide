
const PopularClassesCard = ({ singleClass }) => {
    const { class_name, class_image } = singleClass;
    return (
        <div className="border flex-col h-fit px-10 py-5 w-full mx-auto group">
            <div className="border shadow-xl group-hover:scale-110 transition">
                <figure>
                    <img src={class_image} alt="" />
                </figure>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-2xl font-semibold mb-4">{class_name}</h2>
                <button
                    className="btn inline-flex justify-center rounded-md border border-transparent bg-blue-900 px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                > View Details
                    </button>
            </div>
        </div>
    );
};

export default PopularClassesCard;