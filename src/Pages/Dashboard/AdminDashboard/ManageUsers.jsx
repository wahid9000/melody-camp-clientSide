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
        fetch(`https://musical-server.vercel.app/users/admin/${id}`, {
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
        fetch(`https://musical-server.vercel.app/users/instructor/${id}`, {
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
        <div className="mt-3">
            <h2 className="text-3xl font-semibold mb-5">Manage Users: {users.length}</h2>
            <div className="divider"></div>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead className="text-lg text-white">
                            <tr>
                                <th className="bg-[#1b2065]">#</th>
                                <th className="bg-[#1b2065]">Name</th>
                                <th className="bg-[#1b2065]">Email</th>
                                <th className="bg-[#1b2065]">Action</th>
                                <th className="bg-[#1b2065]">Action</th>
                            </tr>
                        </thead>
                        <tbody className=" font-secondary ">
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td> {user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn capitalize rounded-md bg-[#113d23] border bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-[#35b46a] ">Make Admin</button>}</td>
                                        <td>{user?.role === 'instructor' ? 'Instructor' : <button onClick={() => handleMakeInstructor(user._id)} className="btn capitalize rounded-md bg-[#771867] border bg-opacity-80 px-4 py-2 text-sm font-medium hover:bg-[#d13ab8] text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Make Instructor</button>} </td>
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