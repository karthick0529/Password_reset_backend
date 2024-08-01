import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const API_URL = 'https://password-reset-task-mwu6.onrender.com/api';

const ResetPasswordRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/reset-password`, { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4">RESET CONFIRMATION</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button type="submit">Send Reset Link</Button>
                {message && <Typography color="error">{message}</Typography>}
            </form>
        </Container>
    );
};

export default ResetPasswordRequest;