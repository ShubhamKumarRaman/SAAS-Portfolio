import { motion } from 'framer-motion'
import { useState } from 'react'
import { LockKeyhole, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(
            formData.email,
            formData.password
        )

        if (res.success) {
            navigate('/dashboard');
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="relative min-h-dvh overflow-hidden bg-slate-950">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

            <div className="relative mx-auto flex min-h-dvh w-full max-w-screen-xl items-center justify-center px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8"
                >
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">Welcome Back</h1>
                        <p className="text-sm text-slate-400">Login to your admin dashboard.</p>
                    </div>

                    <motion.form
                        onSubmit={handleSubmit}
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
                            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5 transition focus-within:border-white/20 focus-within:bg-slate-950/60">
                                <Mail size={18} className="shrink-0 text-slate-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 outline-none"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
                            }}
                        >
                            <label className="mb-1.5 block text-sm font-medium text-slate-200">Password</label>
                            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5 transition focus-within:border-white/20 focus-within:bg-slate-950/60">
                                <LockKeyhole size={18} className="shrink-0 text-slate-400" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 outline-none"
                                />
                            </div>
                        </motion.div>

                        <motion.button
                            type="submit"
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.95 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                    },
                                },
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 0 25px rgba(255,255,255,0.15)",
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300"
                        >
                            {/* Animated shine effect */}
                            <motion.span
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            <span className="relative z-10">Login</span>
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    )
}

export default Login
