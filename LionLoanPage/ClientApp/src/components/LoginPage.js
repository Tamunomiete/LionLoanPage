import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the path based on your file structure

import { Button, Card, Container, TextField, Typography } from '@mui/material';


// Import your image
import LionsLogo from './LionsLogo.jpeg'; // Replace with your image path

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    
   

    const handleLogin = async () => {
        try {
            debugger;
            const response = await axios.post('https://localhost:7048/User/Login', {
                username,
                password,
            });

            const data = response.data;

            if (data.isVerified) {
                console.log('Logged in successfully');
                setIsLoggedIn(true);
            } else {
                setLoginMessage('Invalid Login Details');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

 


    if (isLoggedIn) {
        return <Navigate to="/LoanApplication" />;
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 p-0" style={{ backgroundColor:'ghostwhite', overflow: 'hidden' }}>
            {/* Right Side: Login Details */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <Card sx={{ width: 700, borderRadius: 15, p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <div className="text-center mb-4">
                        <img src={LionsLogo} alt="Lions Logo" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>
                        Welcome Back!
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        Please enter your login to proceed
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        onClick={handleLogin} // Use attemptLogin function here
                    >
                        Login
                    </Button>
                    <p style={{ marginTop: '12px', fontWeight: 'bold', textAlign: 'center' }}>{loginMessage}</p>

                    <div className="text-center mt-3">
                        <Link to="/CreateUser" className="text-primary">
                            Create an account
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );

};

export default LoginPage;
