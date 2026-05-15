import { motion } from 'framer-motion'

import Container from '../components/common/Container'

const Home = () => {
    return (
        <section className='py-28'>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center'
                >
                    <h1 className='text-6xl md:text-7xl font-black leading-tight'>
                        Building Modern
                        <span className='text-cyan-400'> Web Experiences</span>
                    </h1>

                    <p className='mt-6 text-slate-400 max-w-2xl mx-auto text-lg'>
                        MERN Stack Developer crafting scalable full-stack applications with premium UI experiences.
                    </p>

                    <div className='mt-10 flex items-center justify-center gap-5'>
                        <button className='px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300'>
                            View Projects
                        </button>

                        <button className='px-8 py-4 border border-slate-700 rounded-xl hover:bg-slate-900 transition-all duration-300'>
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Home