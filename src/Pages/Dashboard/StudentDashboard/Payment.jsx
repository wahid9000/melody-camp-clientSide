import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const selectedClass = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">Make Payment</h2>
            <div className="mx-auto mt-40 w-1/2">
                <Elements stripe={stripePromise}>
                    <CheckoutForm classes={selectedClass}></CheckoutForm>
                </Elements>
            </div>


        </div>
    );
};

export default Payment;