import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/10"
        >
            {
                theme === "dark"
                    ? <FaSun />
                    : <FaMoon />
            }
        </button>
    );
};

export default ThemeToggle;