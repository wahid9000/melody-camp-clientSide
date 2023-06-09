import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";

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

            <div>
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
                                        <td><button className="btn btn-sm btn-success"><FaEdit className="text-red-600 text-xl"></FaEdit></button></td>
                                        <td></td>
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