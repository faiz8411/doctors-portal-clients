import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentBack from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${appointmentBack})`,
    backgroundColor: 'rgba(45, 58, 74,0.8 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CD3EF' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: ' white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolores, quia quos  incidunt dolore dolorum totam <br /> aliquam cupiditate consequuntur porro nostrum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CD3EF' }}>learn more</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;