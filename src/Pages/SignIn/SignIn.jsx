import { useForm } from 'react-hook-form';
import './SignIn.css'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useScrollTop from '../../hooks/useScrollTop';


const SignIn = () => {
    const { pathName } = useLocation();
    useScrollTop(pathName);
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("")

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset(),
                    navigate(from, { replace: true })
                Swal.fire({
                    title: 'Login Success',
                    text: 'User LoggedIn Successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(error => {
                console.log(error);
                setError(toast("Invalid Email or Password"))
            })
    };

    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='background h-[900px]'>
            <div className='pt-24 md:pt-36'>
                <div className='pt-12 md:pt-5'>
                    <h2 className='text-5xl text-center font-semibold mb-10 md:mb-5'>Sign In</h2>
                    <div className='w-10/12 md:w-1/3 mx-auto bg-white p-8 rounded-lg'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>

                            <div className='form-control'>
                                <label className='font-bold mb-3' htmlFor="email">Email:</label>
                                <input type="email" {...register("email", { required: true })} placeholder="Enter your Email*" className="input input-bordered w-full max-w-md" required />
                            </div>
                            {errors.email && <span>This field is required</span>}

                            <div className='form-control relative'>
                                <label className='font-bold mb-3' htmlFor="password">Password:</label>
                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Enter your Password*" className="input input-bordered w-full max-w-md" required />

                                <div className="h-5 w-5 absolute top-1/2 right-3 text-gray-400 cursor-pointer" onClick={handleTogglePassword}>
                                    {showPassword ? (
                                        <FaEyeSlash></FaEyeSlash>
                                    ) : (
                                        <FaEye></FaEye>
                                    )}
                                </div>

                            </div>
                            {errors.password && <span>This field is required</span>}

                            <div className='form-control'>
                                <input className="btn capitalize rounded-md bg-[#30075e] border bg-opacity-80 px-4 py-2 text-sm font-medium hover:bg-[#0c204c] text-white hover:bg-opacity-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" type="submit" value={"Sign In"} />
                            </div>
                        </form>
                        <div className='text-center mt-3'>
                            <p>Do not have an account?  <Link to='/signUp'>SignUp Here</Link></p>
                        </div>
                        <div className='text-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='hidden'>{error}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignIn;