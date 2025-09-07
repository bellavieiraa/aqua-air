import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home.jsx"
import { AboutUs } from "../pages/AboutUs.jsx"
import { Product } from "../pages/Product.jsx"
import { Layout } from "../components/Layout.jsx"
import { ErrorPage } from "../pages/ErrorPage.jsx"
import { Manual } from "../pages/Manual.jsx"
import { References } from "../pages/References.jsx"
import { Game } from "../pages/Game.jsx"

export function App() {
    return (
        <AppRoutes />
    )
}

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/product" element={<Product />} />
                <Route path="/manual" element={<Manual />} />
                <Route path="/references" element={<References />} />
                <Route path="/game" element={<Game />} />
                
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
