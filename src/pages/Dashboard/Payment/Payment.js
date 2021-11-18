import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvlH3HnPZVD9IVWWuBJxbRKOLoSF07C1j50YuGwX2FLvnY8g2K2nncGuI77nWTiGdWfLzCDZTjiKsd0ssZbOLnF00zV0d9YSA');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointments] = useState({})
    useEffect(() => {
        fetch(`https://aqueous-sea-73730.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointmentId])
    console.log(appointment)

    return (
        <div>

            <h2>please pay for :{appointment.serviceName
            }</h2>
            <h2>pay:{appointment.price}</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;