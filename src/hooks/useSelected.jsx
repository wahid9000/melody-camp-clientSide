import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelected = () => {
    const { user } = useContext(AuthContext)
    const { data: selected = [], refetch } = useQuery({
        queryKey: ['mySelectedClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user?.email}`);
            return res.json();
        }
    })
    return [selected, refetch]

}
export default useSelected;