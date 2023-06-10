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
        <div>
            <h2 className="text-3xl font-semibold">My Classes: {classes.length}</h2>

            <div className="mt-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Total Enrolled</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                        <td></td>
                                        <td>{singleClass.status}</td>
                                        <td><Link to={`/dashboard/updateClass/${singleClass._id}`}><button className="btn btn-sm btn-success" disabled={singleClass.status === 'Denied'}><FaEdit className="text-red-600 text-xl"></FaEdit></button></Link> </td>
                                        <td>{singleClass.feedback ? singleClass.feedback : 'Nothing to show!'}</td>
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