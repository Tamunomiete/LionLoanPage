import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

// Create a custom hook to use the context
export function useAuth() {
    return useContext(AuthContext);
}
