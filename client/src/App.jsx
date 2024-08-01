import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import ResetPasswordRequest from './components/ResetPasswordRequest';
import ResetPassword from './components/ResetPassword';
import ProtectedData from './components/ProtectedData';

function App() {
    return (
        <Router>
            <CssBaseline />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password-request" element={<ResetPasswordRequest />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/data" element={<ProtectedData />} />
            </Routes>
        </Router>
    );
}

export default App;