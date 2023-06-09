import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useContext(AuthContext)

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/classes')
            return res.data;
        }
    })

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/classes/approve/${id}`, {
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
                fetch(`http://localhost:5000/classes/deny/${id}`, {
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
        <div>
            <h2 className="text-3xl font-semibold">Manage Classes: {classes.length}</h2>

            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class Image</th>
                                    <th>Class Name</th>
                                    <th>Instructor Name</th>
                                    <th>Instructor Email</th>
                                    <th>Available Seats</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    <th>Send Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map((singleClass, index) =>
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
                                            <td>{singleClass.price}</td>
                                            <td>{singleClass.status}</td>
                                            <td>
                                                <button onClick={() => handleApprove(singleClass._id)} disabled={singleClass.status === 'Approved' || singleClass.status === 'Denied'} className="btn mb-1 btn-sm btn-success">Approve</button>
                                                <button onClick={() => handleDeny(singleClass._id)} disabled={singleClass.status === 'Approved' || singleClass.status === 'Denied'} className="btn btn-sm btn-success bg-red-700 text-white">Deny</button>
                                            </td>
                                            <td><button disabled={singleClass.status === 'Approved' || singleClass.status === 'pending'} className="btn btn-info">Send Feedback</button></td>
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