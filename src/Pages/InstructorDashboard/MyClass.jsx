import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyClass = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

   const {data: classes = []} = useQuery({
    queryKey: ['classes', user?.email],
    enabled: !loading,
    queryFn: async() => {
        const res = await axiosSecure.get(`/instructorClasses?email=${user.email}` )
        return res.data
    }
   })



    return (
        <div>
            <h2 className="text-3xl font-semibold">My Classes: {classes.length}</h2>
        </div>
    );
};

export default MyClass;