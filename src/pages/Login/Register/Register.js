import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Alert, Button, Container, Typography } from '@material-ui/core';

import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const Register = () => {
    const [loginData, SetLoginData] = useState({})

    const { registerUser, isLoading, user } = useAuth()
    const handleOnChange = (e) => {
        const Field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[Field] = value
        SetLoginData(newLoginData)
        // console.log(Field, value)
        e.preventDefault()
    }
    const handleLoginSubmit = (e) => {

        if (loginData.password !== loginData.password2) {
            alert('password did not macth')
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading &&
                            < form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="User Name"

                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="User Password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    type="password"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retype your Password"
                                    name="password2"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    type="password"
                                />

                                <Button
                                    type="submit"
                                    sx={{ width: '75%', m: 1 }}
                                    variant="contained">
                                    Register

                                </Button>
                                <NavLink to="/login"

                                    style={{ textDecoration: 'none' }}
                                    sx={{ width: '75%', m: 1 }}
                                ><Button variant="text" style={{ color: 'red' }}>Already Register?? please login</Button>
                                </NavLink>


                            </form>}
                        {isLoading && <CircularProgress color="success" />
                        }
                        {user?.email && <Alert severity="success">user created  successfully </Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%' }} alt="" />
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;