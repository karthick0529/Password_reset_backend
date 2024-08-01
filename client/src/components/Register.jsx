import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const API_URL = 'https://password-reset-task-mwu6.onrender.com/api';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/user`, { email, password });
            setMessage(response.data.message);
            navigate('/login');
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4">REGISTER</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Register</Button>
                {message && <Typography color="error">{message}</Typography>}
            </form>
        </Container>
    );
};

export default Register;