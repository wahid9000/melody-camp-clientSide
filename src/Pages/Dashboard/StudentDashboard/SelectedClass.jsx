import Swal from "sweetalert2";
import useSelected from "../../../hooks/useSelected";

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
        <div className="mt-12">
            <h2 className="text-3xl font-semibold">My Selected Classes: {selected.length}</h2>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead className=" text-lg">
                            <tr>
                                <th className="bg-[#faf2de]">#</th>
                                <th className="bg-[#faf2de]">Class Name</th>
                                <th className="bg-[#faf2de]">Price</th>
                                <th className="bg-[#faf2de]">Instructor Name</th>
                                <th className="bg-[#faf2de]">Actions</th>
                                <th className="bg-[#faf2de]">Make Payment</th>
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
                                        <td><button onClick={() => handleDelete(item._id)} className="btn hover:bg-black bg-red-700 btn-sm text-white">Delete</button></td>
                                        <td><button className="btn btn-warning btn-sm bg-amber-300">Pay</button></td>
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