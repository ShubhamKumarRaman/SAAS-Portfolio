import { motion } from 'framer-motion'

const DashboardCard = ({ title, value, className = '' }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            className={
                `group rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-colors hover:bg-white/10 sm:p-5 ${className}`
            }
        >
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium text-slate-300">{title}</h3>
                    <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{value}</h1>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10" />
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-2/3 rounded-full bg-white/20" />
            </div>
        </motion.div>
    )
}

export default DashboardCard
