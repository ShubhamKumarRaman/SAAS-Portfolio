import { motion } from 'framer-motion'

const StatsCard = ({
    title,
    value,
    icon,
    growth
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
        >
            <div>
                <div>
                    <p>
                        {title}
                    </p>
                    <h1>
                        {value}
                    </h1>

                    <p>
                        +{growth}% this month
                    </p>
                </div>
                <div>
                    {icon}
                </div>
            </div>
        </motion.div>
    )
}

export default StatsCard;