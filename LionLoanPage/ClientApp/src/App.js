import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import LoginPage from './components/LoginPage';
import { Layout } from './components/Layout';
import { NavMenu } from './components/NavMenu';
import { AuthProvider } from './AuthContext';
import './custom.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const isAuthenticated = isLoggedIn; // Use the same authentication state

    return (
        <AuthProvider>
            <div>
                <Layout>
                    <Routes>
                        <Route path="/LoginPage" element={<LoginPage handleLogin={handleLogin} />} />
                        {AppRoutes.map((route, index) => {
                            const { path, element, isPrivate } = route;
                            if (isPrivate && !isAuthenticated) {
                                return <Route key={index} path={path} element={<Navigate to="/LoginPage" />} />;
                            }
                            return <Route key={index} path={path} element={element} />;
                        })}
                    </Routes>
                </Layout>
                {isAuthenticated && <NavMenu />}
            </div>
        </AuthProvider>
    );
}

export default App;
