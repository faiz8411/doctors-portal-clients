import { Alert, Button, CircularProgress, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, signWithGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()


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
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="User Name"

                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="User Password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard"
                                type="password"
                            />

                            <Button
                                onClick={handleLoginSubmit}
                                type="submit"
                                sx={{ width: '75%', m: 1 }}
                                variant="contained">
                                Login

                            </Button>
                            <NavLink to="/register"

                                style={{ textDecoration: 'none' }}
                                sx={{ width: '75%', m: 1 }}
                            ><Button variant="text" style={{ color: 'red' }}>new User?? please register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress color="success" />
                            }
                            {user?.email && <Alert severity="success">user created  successfully </Alert>}
                            <p>----------------------------------------------------------------</p>
                            <Button onClick={handleGoogleSignIn} variant="contained" style={{ color: 'success' }}>google sign in</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%' }} alt="" />
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;