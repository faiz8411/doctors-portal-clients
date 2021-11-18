import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom style={{ fontWeight: 600 }} >
                        price:  ${price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom >
                        {space} spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>

                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            >


            </BookingModal>
        </>

    );
};

export default Booking;