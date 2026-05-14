import React from 'react'
import DashboardCard from '../components/ui/DashboardCard'

const Dashboard = () => {
    return (
        <div>

            <h1>
                Welcome Back
            </h1>

            <div>
                <DashboardCard title="Projects" value="12" />
                <DashboardCard title="Messages" value="48" />
                <DashboardCard title="Skills" value="25" />
                <DashboardCard title="Views" value="1.2K" />
            </div>

        </div>
    )
}

export default Dashboard
