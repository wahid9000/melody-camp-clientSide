import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

import './CheckoutForm.css'
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ classes }) => {
    const {class_name, price, _id, classId, instructor_name } = classes;
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            // console.log('paymentMethod', paymentMethod);
            setCardError('')
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous User'
                    }
                }
            }
        );
        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)

            const payment = {
                email: user?.email,
                transactionId: transactionId,
                price,
                class_name,
                instructor_name,
                selectedClassId: _id,
                classId,
                date: moment(new Date().toISOString()).format('MMMM Do YYYY, h:mm:ss a')
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertResult.insertedId){
                    navigate('/dashboard/myEnrolledClass')
                    Swal.fire({
                        title: 'Payment Successful',
                        text: 'Thanks For Enrolling To Our Class',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                      })
                }
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#808080',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button className="btn btn-warning btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p>{cardError}</p>}
            {transactionId && <p>Transaction complete with TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;