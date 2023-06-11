import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { loading } = useContext(AuthContext)

    const { data: enrolled } = useQuery({
        queryKey: ['enrolled'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/enrolled');
            return res.data;

        }
    })


    return (
        <div>
            <div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold">My Enrolled Classes</h2>

                    <div className="mt-10">
                        <div className="overflow-x-auto">
                    
                                <table className="table table-zebra">

                                <thead>
                                    <tr>
                                        <th className="bg-[#faf2de] text-lg">#</th>
                                        <th className="bg-[#faf2de] text-lg">Class Name</th>
                                        <th className="bg-[#faf2de] text-lg">Instructor Name</th>
                                        <th className="bg-[#faf2de] text-lg">Date of Enrollment</th>
                                    </tr>
                                </thead>
                                <tbody className=" text-lg">
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