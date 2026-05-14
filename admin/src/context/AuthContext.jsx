import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import API from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (token) {
            setUser({ token });
        }

        setLoading(false);
    }, []);

    //Login
    const login = async (email, password) => {
        try {
            const res = await API.post('/auth/login', {
                email,
                password
            });

            const token = res.data.token;

            localStorage.setItem("adminToken", token);

            setUser({ token });

            return {
                success: true
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    };

    //Logout
    const logout = () => {
        localStorage.removeItem("adminToken");
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export const userAuth = () => useContext(AuthContext);