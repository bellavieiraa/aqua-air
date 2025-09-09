import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";
import logo from '../assets/logo.png';
import { SunHorizon, Moon, List, X } from "phosphor-react";

export function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleThemeToggleAndCloseMenu = () => {
        toggleTheme();
        closeMenu();
    };

    const navLinks = [
        { to: "/manual", text: "Manual" },
        { to: "/product", text: "Product" },
        { to: "/game", text: "Game" },
        { to: "/aboutus", text: "About Us" },
        { to: "/references", text: "References" },
    ];

    return (
        <>
            <header className="font-inter flex justify-center items-center p-4 bg-azulc dark:bg-azule relative h-24 md:h-28">
                <div className="hidden md:flex justify-center items-center gap-12 w-full">
                    <nav>
                        <ul className="flex gap-12 items-center text-sky-800 dark:text-[060733] text-2xl font-bold">
                            <li><Link to="/manual" className="border-2 border-sky-800 dark:border-[060733] rounded-[50px] px-4 py-2 whitespace-nowrap">Manual</Link></li>
                            <li><Link to="/product" className="border-2 border-sky-800 dark:border-[060733] rounded-[50px] px-4 py-2 whitespace-nowrap">Product</Link></li>
                            <li><Link to="/game" className="border-2 border-sky-800 dark:border-[060733] rounded-[50px] px-4 py-2 whitespace-nowrap">Game</Link></li>
                        </ul>
                    </nav>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-24" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-12">
                        <nav>
                            <ul className="flex gap-12 items-center text-sky-800 dark:text-[060733] text-2xl font-bold">
                                <li><Link to="/aboutus" className="border-2 border-sky-800 dark:border-[060733] rounded-[50px] px-4 py-2 whitespace-nowrap">About Us</Link></li>
                                <li><Link to="/references" className="border-2 border-sky-800 dark:border-[060733] rounded-[50px] px-4 py-2 whitespace-nowrap">References</Link></li>
                            </ul>
                        </nav>
                        <button onClick={toggleTheme} className="text-sky-800 dark:text-[060733]">
                            {theme === "dark" ? <SunHorizon size={32} /> : <Moon size={32} />}
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex justify-between items-center w-full px-4">
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-20" />
                        <span className="text-sky-800 dark:text-[060733] font-bold text-2xl">AquaAir</span>
                    </Link>
                    <button onClick={toggleMenu} className="text-sky-800 dark:text-[060733] z-10">
                        <List size={32} />
                    </button>
                </div>
            </header>

            <div
                className={`md:hidden fixed inset-0 bg-sky-800 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col items-center justify-between h-full p-8">
                    <div className="w-full flex justify-center">
                        <Link to="/" onClick={closeMenu}>
                            <img src={logo} alt="Logo" className="h-20" />
                        </Link>
                    </div>

                    <nav>
                        <ul className="flex flex-col gap-6 items-center text-center">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} onClick={closeMenu} className="text-white text-2xl font-bold">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <button onClick={toggleMenu} className="text-white">
                            <X size={40} />
                        </button>
                    </div>

                    <button onClick={handleThemeToggleAndCloseMenu} className="text-white">
                        {theme === "dark" ? <SunHorizon size={32} /> : <Moon size={32} />}
                    </button>
                </div>
            </div>
        </>
    );
}
