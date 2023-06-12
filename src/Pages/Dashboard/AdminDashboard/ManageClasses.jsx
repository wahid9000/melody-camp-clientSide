import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useContext(AuthContext)


    const { data: manageClasses = [], refetch } = useQuery({
        queryKey: ['manageClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/manageClasses')
            return res.data;
        }
    })

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/admin/manageClasses/approve/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Approved!',
                        text: 'Class status is changed to Approved',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    const handleDeny = (id) => {
        Swal.fire({
            title: 'Update Status to Denied?',
            text: "The status of this class will be updated to Denied!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/admin/manageClasses/deny/${id}`, {
                    method: "PATCH"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Denied Successfully!',
                                'You can now send your feedback',
                                'success'
                            )

                        }
                    })
            }
        })
    }


    return (
        <div className="mt-3">
            <h2 className="text-3xl font-semibold mb-5">Manage Classes: {manageClasses.length}</h2>
            <div className="divider"></div>

            <div>
                <div className="mt-10">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-lg text-white">
                                <tr>
                                    <th className="bg-[#1b2065]">#</th>
                                    <th className="bg-[#1b2065]">Class Image</th>
                                    <th className="bg-[#1b2065]">Class Name</th>
                                    <th className="bg-[#1b2065]">Instructor Name</th>
                                    <th className="bg-[#1b2065]">Instructor Email</th>
                                    <th className="bg-[#1b2065]">Available Seats</th>
                                    <th className="bg-[#1b2065]">Price</th>
                                    <th className="bg-[#1b2065]">Status</th>
                                    <th className="bg-[#1b2065]">Action</th>
                                    <th className="bg-[#1b2065]">Send Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageClasses.map((singleClass, index) =>
                                        <tr key={singleClass._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleClass.class_image} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{singleClass.class_name}</td>
                                            <td>{singleClass.instructor_name}</td>
                                            <td>{singleClass.instructor_email}</td>
                                            <td>{singleClass.available_seats}</td>
                                            <td>${singleClass.price}</td>
                                            <td>{singleClass.status}</td>
                                            <td>
                                                <div className="flex flex-col gap-1">
                                                    <button onClick={() => handleApprove(singleClass._id)} disabled={singleClass.status === 'Approved' || singleClass.status === 'Denied'} className="btn capitalize rounded-md bg-orange-500 border bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Approve</button>
                                                    <button onClick={() => handleDeny(singleClass._id)} disabled={singleClass.status === 'Approved' || singleClass.status === 'Denied'} className="btn capitalize rounded-md border bg-[#b90a0a] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75">Deny</button>
                                                </div>
                                            </td>
                                            <td><Link to={`/dashboard/sendFeedback/${singleClass._id}`}><button disabled={singleClass.status === 'Approved' || singleClass.status === 'pending' || singleClass.feedback} type="button" className="btn capitalize rounded-md border bg-[#0a21b9] bg-opacity-80 px-4 hover:bg-[#1c278b]   text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75">{singleClass.feedback ? 'Sent Successful' : 'Send Feedback'}</button></Link></td>
                                        </tr>)
                                }
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;