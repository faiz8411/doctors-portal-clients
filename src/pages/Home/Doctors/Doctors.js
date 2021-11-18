import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import SingleDoctor from '../SingleDoctor/SingleDoctor';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://aqueous-sea-73730.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>

            <h2>doctors:{doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <SingleDoctor
                            key={doctor._id}
                            doctor={doctor}
                        ></SingleDoctor>)
                    }

                </Grid>

            </Container>
            {/* {
                doctors.map(doctor =>
                    <div>
                        <li>{doctor.name}</li>
                    </div>
                )
            } */}
        </div>
    );
};

export default Doctors;