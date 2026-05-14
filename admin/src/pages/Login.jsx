import React from 'react'
import { motion } from 'framer-motion'

const Login = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <h1>
                    Admin Login
                </h1>

                <form>
                    <input
                        type="email"
                        placeholder='Email'
                    />

                    <input
                        type='password'
                        placeholder='Password'
                    />

                    <button>
                        Login
                    </button>
                </form>

            </motion.div>
        </div>
    )
}

export default Login
