import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"
import fundoClaro from "../assets/fundoclaro.png"
import fundoEscuro from "../assets/fundoescuro.png"

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
            <main className="  flex justify-center items-start p-6">
                <div className="w-[1522px] h-[850px] bg-[#EEFEFF] w-full  p-8 rounded-[50px] shadow-md m-14">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}
