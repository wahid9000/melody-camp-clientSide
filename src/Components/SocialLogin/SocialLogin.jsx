import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
                Swal.fire({
                    title: 'Login Success',
                    text: 'User LoggedIn Successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
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