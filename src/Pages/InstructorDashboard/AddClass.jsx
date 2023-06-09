import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const AddClass = () => {

    const {user} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <h2 className="text-3xl font-semibold">Add Your Class</h2>

            <div>
                <form className="space-y-5 mt-12" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-6 mx-auto w-11/12">
                        <div className="form-control">
                            <label>Class Name:</label>
                            <input type="text" {...register("class_name", { required: true })} placeholder="Class Name*" className="mt-3 input input-bordered w-full max-w-md" />
                            {errors.class_name && <span>Class Name field is required</span>}
                        </div>

                        <div className="form-control">
                            <label>Instructor Name:</label>
                            <input type="text" {...register("instructor_name", { required: true })} defaultValue={user?.displayName} readOnly placeholder="Instructor Name*" className="mt-3 input input-bordered w-full max-w-md" />
                            {errors.instructor_name && <span>Instructor Name field is required</span>}
                        </div>

                        <div className="form-control">
                            <label>Class Image:</label>
                            <input type="file" {...register("class_image", { required: true })} className="mt-3 file-input file-input-bordered w-full max-w-md" />
                        </div>
                        {errors.class_image && <span>Class Image is required</span>}

                        <div className="form-control">
                            <label>Instructor Email:</label>
                            <input type="text" defaultValue={user?.email} readOnly  {...register("instructor_email", { required: true })} placeholder="Instructor Email*" className="mt-3 input input-bordered w-full max-w-md" />
                            {errors.instructor_email && <span>Instructor Email field is required</span>}
                        </div>

                        <div className="form-control">
                            <label>Available Seats:</label>
                            <input type="text" {...register("available_seats", { required: true })} placeholder="Available Seats*" className="mt-3 input input-bordered w-full max-w-md" />
                            {errors.available_seats && <span>Available Seats field is required</span>}
                        </div>

                        <div className="form-control">
                            <label>Price:</label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price*" className="mt-3 input input-bordered w-full max-w-md" />
                            {errors.price && <span>Price field is required</span>}
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