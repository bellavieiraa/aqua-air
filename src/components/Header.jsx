import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

export function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="font-playfair">

            <div>
                <button className="border border-blue-700 rounded-md p-2 dark:border-pink-600" onClick={toggleTheme}>{theme === "dark" ? "Tema light ☀️" : "Tema dark 🌙"}</button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>

                    <li>
                        <Link to="/product">Product</Link>
                    </li>

                    <li>
                        <Link to="/manual">Manual</Link>
                    </li>

                    <li>
                        <Link to="/references">References</Link>
                    </li>

                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}