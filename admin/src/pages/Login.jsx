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
        <div>
            <motion.div
                initial={{ opacity: 0, scalse: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}

            >
                <h1>
                    Welcome Back
                </h1>

                <p>
                    Login to your admin Dashboard
                </p>

                <form
                    onSubmit={handleSubmit}
                >
                    {/* Email */}
                    <div>
                        <Mail size={18} />

                        <input
                            type="email"
                            name='email'
                            placeholder='Enter email'
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <LockKeyhole size={18} />
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type='submit'
                    >
                        Login
                    </button>
                </form>

            </motion.div>
        </div>
    )
}

export default Login
