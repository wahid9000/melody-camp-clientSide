import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
    const {_id,  class_image, class_name, available_seats, price, instructor_name } = singleClass;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = () => {
        if (user && user.email) {
            const classElements = {classId: _id, class_name, email: user.email, price, instructor_name}
            console.log(classElements);
            axios.post('http://localhost:5000/mySelectedClass', classElements)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Class Selection Successful',
                            text: "Please Visit Your Dashboard's My Selected Class",
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
            navigate('/signIn',{state: {from: location}})
        }
    }








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
                    <button onClick={handleSelect} className="btn btn-warning btn-sm bg-amber-300">Select This Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;