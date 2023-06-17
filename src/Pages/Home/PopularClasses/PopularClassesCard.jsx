import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const PopularClassesCard = ({ singleClass }) => {
    const { class_name, class_image, enrolledStudents, price } = singleClass;
    // 
    return (
        <div className="card  flex-col pb-5 border-y-4 rounded-none w-full mx-auto">
            <div className="border shadow-xl  group">
                <figure className="group-hover:scale-110 transition">
                    <img src={class_image} className="h-60" alt="" />
                    <p className="bg-slate-900 absolute right-0 top-0 font-primary text-white p-2">Students Enrolled: {enrolledStudents}</p>
                </figure>
            </div>
            <div className="mt-8 px-5">
                <h2 className="text-2xl font-semibold font-primary">{class_name}</h2>
                <p className="mb-5 text-lg font-secondary  ">${price}</p>
                <Link to='/classes'><button
                    className="btn font-secondary font-semibold capitalize rounded-md bg-white border-b-4 border-blue-950 px-2 text-sm  hover:border-black hover:bg-blue-950 text-blue-950 hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                > See Details <FaArrowRight></FaArrowRight> 
                    </button></Link>
            </div>
        </div>
    );
};

export default PopularClassesCard;