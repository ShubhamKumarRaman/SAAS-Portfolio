import { Link } from "react-router-dom";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
            <Container className="flex items-center justify-between py-5">
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide"
                >
                    Shubham.dev
                </Link>

                <ul className="hidden md:flex items-center gap-8">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <ThemeToggle />
            </Container>
        </nav>
    );
};

export default Navbar;