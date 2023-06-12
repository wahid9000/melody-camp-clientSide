import { Link } from "react-router-dom";

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
                <Link to='/classes'><button
                    className="btn capitalize rounded-md bg-blue-950 border px-4 py-2 text-sm font-medium hover:bg-[#3045cd] text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                > View Details
                    </button></Link>
            </div>
        </div>
    );
};

export default PopularClassesCard;