import { motion } from 'framer-motion'

const Login = () => {
    return (
        <div className="relative min-h-dvh overflow-hidden bg-slate-950">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

            <div className="relative mx-auto flex min-h-dvh w-full max-w-screen-xl items-center justify-center px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8"
                >
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">Admin Login</h1>
                        <p className="text-sm text-slate-400">Sign in to access your dashboard.</p>
                    </div>

                    <motion.form
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                        }}
                        className="mt-6 space-y-4"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                            }}
                        >
                            <label className="mb-1.5 block text-sm font-medium text-slate-200">Email</label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition focus:border-white/20 focus:bg-slate-950/60"
                            />
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                            }}
                        >
                            <label className="mb-1.5 block text-sm font-medium text-slate-200">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition focus:border-white/20 focus:bg-slate-950/60"
                            />
                        </motion.div>

                        <motion.button
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                            }}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-white/10 transition hover:bg-white/15"
                        >
                            Login
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    )
}

export default Login
