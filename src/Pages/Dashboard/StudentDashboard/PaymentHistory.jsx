
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);

    axiosSecure.get('/paymentHistory')
    .then(res => {
        console.log(res.data);
        setPaymentHistory(res.data)
    })

    return (
        <div>
            <h2 className="text-3xl font-semibold">My Payment History: {paymentHistory.length}</h2>

            <div>

            </div>
        </div>
    );
};

export default PaymentHistory;