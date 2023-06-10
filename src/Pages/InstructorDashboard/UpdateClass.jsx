import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";


const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const UpdateClass = () => {
    const classes = useLoaderData();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        console.log(data);
        formData.append('image', data.class_image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { class_name, available_seats, price } = data;
                    const classData = { class_name, available_seats: parseFloat(available_seats), price: parseFloat(price), class_image: imgUrl }
                    console.log(classData);
                    axiosSecure.put(`/classes/${classes._id}`, classData)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                reset();
                                navigate('/dashboard/myClass')
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Class Information Updated Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Continue'
                                })
                            }
                        })
                }
            })
    }



    return (
        <div>
            <h2 className="text-3xl font-bold">Update Class: {classes.class_name}</h2>

            <form className="space-y-5 mt-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-6 mx-auto w-11/12">
                    <div className="form-control">
                        <label>Class Name:</label>
                        <input type="text" defaultValue={classes.class_name} {...register("class_name", { required: true })} placeholder="Class Name*" className="mt-3 input input-bordered w-full max-w-md" />

                    </div>

                    <div className="form-control">
                        <label>Class Image:</label>
                        <input type="file" {...register("class_image", { required: true })} className="mt-3 file-input file-input-bordered w-full max-w-md" required/>
                    </div>


                    <div className="form-control">
                        <label>Available Seats:</label>
                        <input type="text" defaultValue={classes.available_seats} {...register("available_seats", { required: true })} placeholder="Available Seats*" className="mt-3 input input-bordered w-full max-w-md" />

                    </div>

                    <div className="form-control">
                        <label>Price:</label>
                        <input type="text" defaultValue={classes.price}  {...register("price", { required: true })} placeholder="Price*" className="mt-3 input input-bordered w-full max-w-md" />

                    </div>

                </div>

                <div className="w-11/12 mx-auto">
                    <input className="btn btn-warning w-full bg-amber-300" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateClass;