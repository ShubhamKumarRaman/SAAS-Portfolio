import { FiMoon, FiSun } from 'react-icons/fi'

import useTheme from '../../hooks/useTheme'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className='p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300'
        >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
    )
}

export default ThemeToggle