import { NavLink } from 'react-router-dom'

const navLinks = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
    {
        name: 'Skills',
        path: '/skills',
    },
    {
        name: 'Blog',
        path: '/blog',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
]

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg'>
            <Container>
                <div className='flex items-center justify-between h-20'>
                    <h1 className='text-2xl font-bold text-cyan-400'>
                        Shubham.dev
                    </h1>

                    <nav className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-cyan-400 font-semibold'
                                        : 'text-slate-300 hover:text-cyan-400 transition-all duration-300'
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <ThemeToggle />
                </div>
            </Container>
        </header>
    )
}

export default Navbar