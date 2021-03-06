import { Alert, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://aqueous-sea-73730.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    // setEmail('')
                    setSuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                <Button type="submit" variant="contained">make admin</Button>
            </form>
            {success && <Alert severity="success">admin created  successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;