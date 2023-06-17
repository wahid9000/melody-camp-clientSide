import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { FaArrowRight } from 'react-icons/fa';

const ClassesCard = ({ singleClass }) => {
    const { _id, class_image, class_name, available_seats, price, instructor_name } = singleClass;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleSelect = () => {
        if (user && user.email) {
            const classElements = { classId: _id, class_name, email: user.email, price, instructor_name }
            console.log(classElements);
            axios.post('https://musical-server.vercel.app/mySelectedClass', classElements)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        navigate('/dashboard/mySelectedClass')
                        Swal.fire({
                            title: 'Class Selection Successful',
                            text: "You must Make Payment To Get Enrolled",
                            icon: 'success',
                            confirmButtonText: 'Continue'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Login Required.',
                text: 'Please Login To Select Your Class',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
            navigate('/signIn', { state: { from: location } })
        }
    }



    return (
        <div>

            <div className={available_seats === 0 ? "border py-8 px-2 md:flex justify-center items-center gap-5 group bg-red-300" : "border py-8 px-2 md:flex justify-center items-center gap-5 group "}>
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

                    {
                        isAdmin || isInstructor ?
                            <div className="text-center mt-5">
                                <button onClick={handleSelect} disabled className="btn font-primary text-lg capitalize rounded-md bg-blue-950 border-black border-b-4  px-4 h-8 font-bold  hover:bg-white text-white ease-in duration-600 hover:text-blue-950 hover:border-black  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Select This Class</button>
                            </div>
                            :
                            <div className="text-center mt-5">
                                <button onClick={handleSelect} disabled={available_seats === 0} className="btn font-primary text-lg capitalize rounded-md bg-blue-950 border-black border-b-4  px-4 h-8 font-bold  hover:bg-white text-white ease-in duration-600 hover:text-blue-950 hover:border-black  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Enroll Now <FaArrowRight></FaArrowRight></button>
                            </div>
                    }
                </div>
            </div>

        </div>

    );
};

export default ClassesCard;