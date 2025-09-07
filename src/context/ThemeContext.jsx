import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const root = document.documentElement
        root.classList.remove("dark", "light")
        root.classList.add(theme)
    }, [theme])

    const themeProps = { 
        theme,
        toggleTheme: () => setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}
