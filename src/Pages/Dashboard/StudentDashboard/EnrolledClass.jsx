import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user, loading } = useContext(AuthContext)

    const { data: enrolled } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
            return res.data;

        }
    })


    return (
        <div>
            <div>
                <div className="mt-3">
                    <h2 className="text-3xl font-semibold mb-5 font-primary">My Enrolled Classes: {enrolled?.length}</h2>
                    <div className="divider"></div> 

                    <div className="mt-10">
                        <div className="overflow-x-auto">
                    
                                <table className="table table-zebra">

                                <thead className="text-lg text-white font-primary">
                                    <tr>
                                        <th className="bg-[#1b2065]">#</th>
                                        <th className="bg-[#1b2065]">Class Name</th>
                                        <th className="bg-[#1b2065]">Instructor Name</th>
                                        <th className="bg-[#1b2065]">Date of Enrollment</th>
                                    </tr>
                                </thead>
                                <tbody className="font-secondary text-lg">
                                    {
                                        enrolled?.map((singleClass, index) =>
                                            <tr key={singleClass._id}>
                                                <td>{index + 1}</td>
                                                <td className="font-semibold">{singleClass.class_name}</td>
                                                <td>{singleClass.instructor_name}</td>
                                                <td className="font-semibold">{singleClass.date}</td>
                                            

                                            </tr>)
                                    }



                                </tbody>
                            </table>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;