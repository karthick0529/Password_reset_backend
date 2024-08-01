import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const API_URL = 'https://password-reset-task-mwu6.onrender.com/api';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
            setMessage(response.data.message);
            navigate('/login');
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4">RESET PASSWORD</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="New Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Reset Password</Button>
                {message && <Typography color="error">{message}</Typography>}
            </form>
        </Container>
    );
};

export default ResetPassword;