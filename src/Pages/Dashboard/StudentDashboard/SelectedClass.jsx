import Swal from "sweetalert2";
import useSelected from "../../../hooks/useSelected";
import { Link } from "react-router-dom";

const SelectedClass = () => {
    const [selected, refetch] = useSelected();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you Sure?',
            text: "Class will be removed permanently.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mySelectedClass/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted Successfully.',
                                'success'
                            )
                        }


                    })
            }
        })
    }

    return (
        <div className="mt-3">
            <h2 className="text-3xl font-semibold mb-5">My Selected Classes: {selected.length}</h2>
            <div className="divider"></div>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead className=" text-lg text-white">
                            <tr>
                                <th className="bg-[#1b2065]">#</th>
                                <th className="bg-[#1b2065]">Class Name</th>
                                <th className="bg-[#1b2065]">Price</th>
                                <th className="bg-[#1b2065]">Instructor Name</th>
                                <th className="bg-[#1b2065]">Actions</th>
                                <th className="bg-[#1b2065]">Make Payment</th>
                            </tr>
                        </thead>
                        <tbody className=" text-lg">
                            {
                                selected?.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td className="font-semibold">{item.class_name}</td>
                                        <td>${item.price}</td>
                                        <td>{item.instructor_name}</td>
                                        <td><button onClick={() => handleDelete(item._id)}  type="button" className="rounded-md border bg-[#b90a0a] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75">Delete</button></td>
                                        <td><Link to={`/dashboard/payment/${item._id}`}><button
                                            type="button" className="rounded-md bg-slate-950 border bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                        >Make Payment</button></Link></td>
                                    </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;