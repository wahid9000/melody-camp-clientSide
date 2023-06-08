import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
                axios.post('http://localhost:5000/users', saveUser)
                    .then(res => {
                        console.log(res.data);
                        navigate(from, { replace: true })
                        Swal.fire({
                            title: 'Sign In Successful',
                            text: 'Thanks for Signing In',
                            icon: 'success',
                            confirmButtonText: 'Continue'
                        })
                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-warning"><FaGoogle></FaGoogle>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;