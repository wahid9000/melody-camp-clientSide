import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddClass = () => {

    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const { register, handleSubmit } = useForm();
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
                    const { class_name, instructor_name, available_seats, instructor_email, price } = data;
                    const classData = { class_name, instructor_name, available_seats:parseFloat(available_seats), instructor_email, price: parseFloat(price) , status:"pending",  class_image: imgUrl }
                    console.log(classData);
                    axiosSecure.post('/classes', classData)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                // reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Class Information Has Been Inserted',
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
            <h2 className="text-3xl font-semibold">Add A Class</h2>

            <div>
                <form className="space-y-5 mt-12" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-6 mx-auto w-11/12">
                        <div className="form-control">
                            <label>Class Name:</label>
                            <input type="text" {...register("class_name", { required: true })} placeholder="Class Name*" className="mt-3 input input-bordered w-full max-w-md" />
                            
                        </div>

                        <div className="form-control">
                            <label>Instructor Name:</label>
                            <input type="text" {...register("instructor_name", { required: true })} defaultValue={user?.displayName} readOnly placeholder="Instructor Name*" className="mt-3 input input-bordered w-full max-w-md" />
                           
                        </div>

                        <div className="form-control">
                            <label>Class Image:</label>
                            <input type="file" {...register("class_image", { required: true })} className="mt-3 file-input file-input-bordered w-full max-w-md" />
                        </div>
                       

                        <div className="form-control">
                            <label>Instructor Email:</label>
                            <input type="text" defaultValue={user?.email} readOnly  {...register("instructor_email", { required: true })} placeholder="Instructor Email*" className="mt-3 input input-bordered w-full max-w-md" />
                            
                        </div>

                        <div className="form-control">
                            <label>Available Seats:</label>
                            <input type="text" {...register("available_seats", { required: true })} placeholder="Available Seats*" className="mt-3 input input-bordered w-full max-w-md" />
                      
                        </div>

                        <div className="form-control">
                            <label>Price:</label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price*" className="mt-3 input input-bordered w-full max-w-md" />
                            
                        </div>

                    </div>

                   <div className="w-11/12 mx-auto">
                   <input className="btn btn-warning w-full bg-amber-300" type="submit" />
                   </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;