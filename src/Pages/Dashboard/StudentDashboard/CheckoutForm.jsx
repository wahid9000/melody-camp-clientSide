import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("")

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error);
            setCardError(error.message)
        }else{
            console.log('paymentMethod' ,paymentMethod);
            setCardError('')
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            backgroundColor: '#f1e39b',
                            fontSize: '18px',
                            color: '#424770',
                            '::placeholder': {
                                color: 'black',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-center mt-10">
            <button className="btn btn-warning btn-sm" type="submit" disabled={!stripe}>
                Pay
            </button>
            </div>
        </form>
        {cardError&& <p>{cardError}</p>}
        </>
    );
};

export default CheckoutForm;