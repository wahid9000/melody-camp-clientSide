import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL),
            reset(),
            navigate('/')
            Swal.fire({
                title: 'Welcome!',
                text: 'User Registration Successful',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
        })
        .catch(error => console.log(error));
    };



    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const password = watch('password');

    return (
        <div className='background h-[850px]'>
            <div>
                <div className='pt-12 md:pt-5'>
                    <h2 className='text-5xl text-center font-semibold mb-8 md:mb-5'>Sign Up</h2>
                    <div className='w-10/12 md:w-1/3 mx-auto bg-white p-8 rounded-lg'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>

                            <div className='form-control'>
                                <label className='font-bold' htmlFor="name">Name:</label>
                                <input type="name" {...register("name", { required: true })} placeholder="Enter your Name*" className="input input-bordered w-full max-w-md" required />
                            </div>
                            {errors.name && <span className="text-red-600">Name field is required</span>}

                            <div className='form-control'>
                                <label className='font-bold' htmlFor="email">Email:</label>
                                <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="input input-bordered w-full max-w-md" required />
                            </div>
                            {errors.email && <span className="text-red-600">Email field is required</span>}

                            <div className='form-control relative'>
                                <label className='font-bold' htmlFor="password">Password:</label>
                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/ })} placeholder="Enter your Password*" className="input input-bordered w-full max-w-md" required />

                                <div className="h-5 w-5 absolute top-1/2 right-3 text-gray-400 cursor-pointer" onClick={handleTogglePassword}>
                                    {showPassword ? (
                                        <FaEyeSlash></FaEyeSlash>
                                    ) : (
                                        <FaEye></FaEye>
                                    )}
                                </div>

                            </div>
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be atleast 6 characters or more</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase and one special character.</span>}

                            <div className='form-control relative'>
                                <label className='font-bold' htmlFor="confirmPassword">Confirm Password:</label>
                                <input type={showPassword ? 'text' : 'password'} {...register("confirmPassword", { required: true, minLength: 6, validate: (value) => value === password, })} placeholder="Confirm your Password*" className="input input-bordered w-full max-w-md" required />

                                <div className="h-5 w-5 absolute top-1/2 right-3 text-gray-400 cursor-pointer" onClick={handleTogglePassword}>
                                    {showPassword ? (
                                        <FaEyeSlash></FaEyeSlash>
                                    ) : (
                                        <FaEye></FaEye>
                                    )}
                                </div>
                            </div>
                            {errors.confirmPassword && <span className="text-red-600">
                                Password and confirm password not matching
                            </span>}

                            <div className='form-control'>
                                <label className='font-bold' htmlFor="photoURL">PhotoURL:</label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Enter PhotoURL*" className="input input-bordered w-full max-w-md" required />
                            </div>
                            {errors.photoURL && <span className="text-red-600">PhotoURL field is required</span>}

                            <div className='form-control'>
                                <input value={"Sign Up"} className='btn w-1/3 mx-auto btn-warning font-bold mt-3 bg-amber-300' type="submit" />
                            </div>
                        </form>
                        <div className='text-center mt-3'>
                            <p>Already have an account?  <Link className="font-semibold text-blue-800" to='/signIn'>SignIn Here</Link></p>
                        </div>
                        <div className="text-center">
                        <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

                <form>

                </form>
            </div>
        </div>
    );
};

export default SignUp;