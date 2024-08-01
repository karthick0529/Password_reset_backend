import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import ResetPasswordRequest from './components/ResetPasswordRequest';
import ResetPassword from './components/ResetPassword';
import ProtectedData from './components/ProtectedData';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1,textAlign:"center" }}>
            PASSWORD RESET TASK
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/reset-password-request">Reset Password</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={3}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password-request" element={<ResetPasswordRequest />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/data" element={<ProtectedData />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
