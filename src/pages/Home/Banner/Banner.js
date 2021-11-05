import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import chairbg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import { Box, fontWeight, height } from '@mui/system';

const bannerBg = {
    background: `url(${chairbg})`,

}
const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item style={{ ...verticleCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non natus, quod repudiandae corporis adipisci nam!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CD3EF' }}>Get Appointment</Button>
                    </Box>

                </Grid>

                <Grid item xs={12} md={7} style={verticleCenter}>
                    <img style={{ width: '300px' }} src={chair} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;