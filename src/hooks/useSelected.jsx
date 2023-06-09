import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelected = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: selected = [], refetch } = useQuery({
        queryKey: ['mySelectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/mySelectedClass?email=${user?.email}`);
            return res.data;
        }
    })
    return [selected, refetch]

}
export default useSelected;