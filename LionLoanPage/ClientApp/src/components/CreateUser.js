import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePictureBase64: null,
        profilePictureContentType:null,
    });
    const [alertMessage, setAlertMessage] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const { isLoggedIn } = useAuth(); // Access the isLoggedIn state from the context
    const navigate = useNavigate();
    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
   



    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            setIsEmailValid(emailPattern.test(value));
        }

        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUserData((prevData) => ({
                    ...prevData,
                    profilePictureUrl: event.target.result,
                    profilePictureBase64: event.target.result.split(',')[1], // Extract base64 part
                    profilePictureContentType: file.type, // Set the content type
                }));
            };
            reader.readAsDataURL(file);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7048/User/CreateUser', userData);
            const data = response.data;
            setAlertMessage(data.returnMessage);

            if (data.returnMessage === 'User created successfully') {
                setIsSuccessPopupVisible(true); // Show the success popup
            }
            navigate('/LoginPage'); // Redirect to loginpage
            
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage('An error occurred while processing your request.');
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-80">

            <div className="card p-4" style={{ width: '400px', borderRadius: '15px' }}>
              


                        <h2 className="card-title text-center mb-4">User Registration</h2>
                        <div className="mb-3 text-center">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <label htmlFor="profilePictureUrl" className="form-label">
                                    Profile Picture
                                </label>
                                <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%' }}>
                                    {userData.profilePictureUrl ? (
                                        <img
                                            src={userData.profilePictureUrl}
                                            alt="Profile"
                                            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#f0f0f0',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <i className="fa fa-user fa-4x" aria-hidden="true" style={{ color: '#888' }}></i>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        name="profilePictureUrl"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0,
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
                                <button className="btn btn-secondary mt-2" onClick={() => document.querySelector('input[type="file"]').click()}>
                                    Upload
                                </button>
                            </div>
                        </div>
                        {alertMessage && (
                            <div className="alert alert-info" role="alert">
                                {alertMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                                />
                                {!isEmailValid && (
                                    <div className="alert alert-danger mt-2">
                                        Invalid email format.
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary me-2" disabled={!isEmailValid}>
                                Register
                    </button>
                    <button className="btn btn-secondary">
                        Back
                    </button>

                </form>

                {isSuccessPopupVisible && (
                    <div className="popup">
                        User successfully created! 
                    </div>
                )}
                
            </div>
             
                   
        </div>
                  
    );

                
};
                
export default CreateUser;
