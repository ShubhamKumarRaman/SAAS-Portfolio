import { motion } from 'framer-motion'
import React from 'react'

const DashboardCard = ({ title, value }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
        >
            <h3>
                {title}
            </h3>

            <h1>
                {value}
            </h1>
        </motion.div>
    )
}

export default DashboardCard
