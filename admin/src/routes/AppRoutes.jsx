import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login />} />

                <Route
                    path='/dashboard'
                    element={
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
