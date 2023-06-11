import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <span className=" flex justify-center items-center mx-auto mt-[20%] loading loading-spinner loading-lg"></span>
    }

    if (user && isInstructor) {
        return children
    }

    return (
        Swal.fire({
            title: 'Something Error!',
            text: 'You must Login First to Visit this Page',
            icon: 'error',
            confirmButtonText: 'Continue'
        }),
        <div>
            <Navigate to="/signIn" state={{from: location}} replace></Navigate>
        </div>
            
            
     
    )


};

export default InstructorRoute;