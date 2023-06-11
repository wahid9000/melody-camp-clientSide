import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className=" flex justify-center items-center mx-auto mt-[20%] loading loading-spinner loading-5xl"></span>
    }

    if (user && isAdmin) {
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

export default AdminRoute;