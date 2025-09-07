import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function ErrorPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [])

    return (
        <>
            <h1>Erro 404. Página não encontrada</h1>

        </>
    )
}