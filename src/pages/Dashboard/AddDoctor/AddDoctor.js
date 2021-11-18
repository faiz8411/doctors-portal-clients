import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';



const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('https://aqueous-sea-73730.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    setSuccess('doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <Input accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit">
                    add doctor
                </Button>
            </form>
            {success && <p>{success}</p>}
        </div>
    );
};

export default AddDoctor;