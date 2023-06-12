
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useContext(AuthContext)

   const {data: paymentHistory} = useQuery({
    queryKey: ['paymentHistory', user?.email],
    enabled: !loading,
    queryFn: async() => {
        const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`);
        return res.data;

    }
   })

    return (
        <div>
            <div>
                <div className="mt-3">
                    <h2 className="text-3xl font-semibold mb-5">My Payment History : {paymentHistory?.length}</h2>
                    <div className="divider"></div> 

                    <div className="mt-10">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">

                                <thead className="text-white text-lg">
                                    <tr>
                                        <th className="bg-[#1b2065]">#</th>
                                        <th className="bg-[#1b2065]">Date</th>
                                        <th className="bg-[#1b2065]">Class Name</th>
                                        <th className="bg-[#1b2065]">Price</th>
                                        <th className="bg-[#1b2065]">Transaction ID</th>
                                        
                                        
                            
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