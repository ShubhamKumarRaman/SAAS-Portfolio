import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import Navbar from '../components/ui/Navbar'

const DashboardLayout = () => {
    return (
        <div>

            <Sidebar />

            <div>
                <Navbar />

                <div>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default DashboardLayout
