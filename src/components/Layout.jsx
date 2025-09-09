import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"
import fundoClaro from "../assets/fundoclaro.png"
import fundoEscuro from "../assets/fundoescuro.png"
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export function Layout() {
    const { theme } = useContext(ThemeContext)

    const backgroundStyle = {
        backgroundImage: `url(${theme === "dark" ? fundoEscuro : fundoClaro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div style={backgroundStyle} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex justify-center items-start pb-12">
                <div className="w-[95%] md:w-[80%] bg-[#EEFEFF] rounded-[50px] shadow-md m-4 md:m-12 dark:bg-[#4000B74F]">
                    <Link to="/">
                    <img src={logo} alt="AquaAir logo" className="h-20 w-auto m-4" />
                    </Link>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}
