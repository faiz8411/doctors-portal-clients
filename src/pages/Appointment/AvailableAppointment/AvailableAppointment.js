import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';
const bookings = [
    { id: 1, name: 'Teeth Orthodontics', time: '8.00am-9.00am', space: 10 },
    { id: 2, name: 'Cosmetics Dentistry', time: '10.00am-11.30am', space: 10 },
    { id: 3, name: 'Teeth Cleaning', time: '5.00am-6.30am', space: 10 },
    { id: 4, name: 'Cavity Protection', time: '7.00am-8.30am', space: 10 },
    { id: 5, name: 'Teeth orthodontics 2', time: '8.00pm-9.00pm', space: 10 },
    { id: 6, name: 'Oral surgery', time: '11.00am-1.00pm', space: 10 },
]
const AvailableAppointment = ({ date }) => {
    return (

        <Container>
            <Typography sx={{ color: 'info.main', mb: 2, fontWeight: 600 }} >Available Appointment on {date.toDateString()}</Typography>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }

            </Grid>
        </Container>

    );
};

export default AvailableAppointment;