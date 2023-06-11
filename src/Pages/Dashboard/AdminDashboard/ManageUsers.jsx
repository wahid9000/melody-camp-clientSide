import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User has been Made Admin',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    const handleMakeInstructor = (id) => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User has been Made Instructor',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl font-semibold">Total users: {users.length}</h2>

            <div className="mt-12">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td> {user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-success btn-sm">Make Admin</button>}</td>
                                        <td>{user?.role === 'instructor' ? 'Instructor' : <button onClick={() => handleMakeInstructor(user._id)} className="btn btn-warning bg-amber-300 btn-sm">Make Instructor</button>} </td>
                                    </tr>)
                            }
                            <tr>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;