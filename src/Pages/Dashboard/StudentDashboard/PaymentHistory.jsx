
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const {loading} = useContext(AuthContext)

   const {data: paymentHistory} = useQuery({
    queryKey: ['paymentHistory'],
    enabled: !loading,
    queryFn: async() => {
        const res = await axiosSecure.get('/paymentHistory');
        return res.data;

    }
   })

    return (
        <div>
            <div>
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold">My Payment History</h2>

                    <div className="mt-10">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">

                                <thead className=" text-lg">
                                    <tr>
                                        <th className="bg-[#faf2de]">#</th>
                                        <th className="bg-[#faf2de]">Date</th>
                                        <th className="bg-[#faf2de]">Class Name</th>
                                        <th className="bg-[#faf2de]">Price</th>
                                        <th className="bg-[#faf2de]">Transaction ID</th>
                                        
                                        
                            
                                    </tr>
                                </thead>
                                <tbody className=" text-lg">
                                    {
                                        paymentHistory?.map((singleClass, index) =>
                                            <tr key={singleClass._id}>
                                                <td>{index + 1}</td>
                                                <td className="font-semibold">{singleClass.date}</td>
                                                <td className="font-semibold">{singleClass.class_name}</td>
                                                <td>${singleClass.price}</td>
                                                <td>{singleClass.transactionId}</td>
                                                
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

export default PaymentHistory;