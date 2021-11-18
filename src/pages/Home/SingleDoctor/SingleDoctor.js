import { Grid, Typography } from '@mui/material';
import React from 'react';

const SingleDoctor = ({ doctor }) => {
    const { name, image } = doctor
    return (

        <Grid item xs={12} sm={6} md={4}>
            <img style={{ width: '200px', height: '200px' }} src={`data:image/jpeg;base64,${image}`} alt="" />
            <Typography variant="h4">
                {name}
            </Typography>
        </Grid>

    );
};

export default SingleDoctor;