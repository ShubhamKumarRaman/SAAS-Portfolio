import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import { AnimatePresence, motion } from 'framer-motion'
import ProtectedRoute from '../components/routes/ProtectedRoute'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default AppRoutes;

const AnimatedRoutes = () => {
    const location = useLocation()

    const pageVariants = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route
                    path='/'
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            <Login />
                        </motion.div>
                    }
                />

                <Route
                    path='/dashboard'
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            <ProtectedRoute>
                                <DashboardLayout>
                                    <Dashboard />
                                </DashboardLayout>
                            </ProtectedRoute>
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}
