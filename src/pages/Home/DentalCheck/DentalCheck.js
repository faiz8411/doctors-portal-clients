import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const DentalCheck = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ my: 3 }}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '450px', height: '500px' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={7} style={{ textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ my: 4, fontWeight: 500 }}>
                        Exceptional   Dental  <br /> Care
                        On Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Amet explicabo quia quas ullam hic officia dolor assumenda. <br /> Ad asperiores reprehenderit quis, neque id, et, <br /> cum dolorum assumenda optio nesciunt est quae doloremque ut itaque quasi <br /> atque iure deleniti eum. <br /> Iure aliquid aut vero nisi cupiditate perspiciatis provident sapiente eum quia!
                    </Typography>
                    <Button variant="contained" style={{ mb: 2 }}>Learn more</Button>

                </Grid>


            </Grid>
        </Box >
    );
};

export default DentalCheck;