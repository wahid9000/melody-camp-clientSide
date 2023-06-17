import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorClasses?email=${user.email}`)
            return res.data
        }
    })



    return (
        <div className="mt-3">
            <h2 className="text-3xl font-semibold mb-5">My Classes: {classes.length}</h2>
            <div className="divider"></div>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=" text-lg text-white">
                            <tr>
                                <th className="bg-[#1b2065]">#</th>
                                <th className="bg-[#1b2065]">Class Image</th>
                                <th className="bg-[#1b2065]">Class Name</th>
                                <th className="bg-[#1b2065]">Total Enrolled</th>
                                <th className="bg-[#1b2065]">Status</th>
                                <th className="bg-[#1b2065]">Action</th>
                                <th className="bg-[#1b2065]">Feedback</th>
                            </tr>
                        </thead>
                        <tbody className=" font-secondary ">
                            {
                                classes.map((singleClass, index) =>
                                    <tr key={singleClass._id}>
                                        <td>{index+1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.class_image}/>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{singleClass.class_name}</td>
                                        <td>{singleClass.enrolledStudents}</td>
                                        <td className="text-red-600">{singleClass.status}</td>
                                        <td><Link to={`/dashboard/updateClass/${singleClass._id}`}><button className="btn btn-primary bg-[#0f2a2d]"><FaEdit className="text-white text-xl"></FaEdit></button></Link> </td>
                                        <td>{singleClass.feedback ? singleClass.feedback : 'Nothing!'}</td>
                                    </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;