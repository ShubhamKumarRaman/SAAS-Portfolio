import DashboardCard from '../components/ui/DashboardCard'
import { motion } from 'framer-motion'
import StatsCard from '../components/analytics/StatsCard'
import VisitorsChart from '../components/analytics/VisitorsChart'
import ProjectsChart from '../components/analytics/ProjectsChart'
import AnalyticsTable from '../components/analytics/AnalyticsTable'
import { Activity, Eye, FolderKanban, Mail } from 'lucide-react'

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Header */}

            <div>
                <h1>
                    Dashboard Analytics
                </h1>

                <p>
                    Monitor portfolio performance & insights
                </p>
            </div>

            {/* Stats */}
            <div>
                <StatsCard
                    title="Visitors"
                    value="12.4K"
                    growth="18"
                    icon={<Eye />}
                />

                <StatsCard
                    title="Projects"
                    value="24"
                    growth="12"
                    icon={<FolderKanban />}
                />

                <StatsCard
                    title="Messages"
                    value="89"
                    growth="9"
                    icon={<Mail />}
                />

                <StatsCard
                    title="Engagement"
                    value="76%"
                    growth="14"
                    icon={<Activity />}
                />
            </div>

            {/* Charts */}
            <div>
                <VisitorsChart />
                <ProjectsChart />
            </div>

            {/* Table */}
            <AnalyticsTable />
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col gap-1"
            >
                <h1 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">Welcome Back</h1>
                <p className="text-sm text-slate-400">Here’s what’s happening with your portfolio today.</p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                    },
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {[{
                    title: 'Projects',
                    value: '12',
                }, {
                    title: 'Messages',
                    value: '48',
                }, {
                    title: 'Skills',
                    value: '25',
                }, {
                    title: 'Views',
                    value: '1.2K',
                }].map((card) => (
                    <motion.div
                        key={card.title}
                        variants={{
                            hidden: { opacity: 0, y: 18 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
                        }}
                    >
                        <DashboardCard title={card.title} value={card.value} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6"
            >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-base font-semibold tracking-tight">Quick Actions</h2>
                        <p className="text-sm text-slate-400">Common tasks to keep your portfolio fresh.</p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 transition hover:bg-white/15"
                        >
                            Add Project
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-slate-100"
                        >
                            View Messages
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Dashboard
