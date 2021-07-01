import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import notFound from '../assets/notFound.svg'
import './styles/notFound.scss'

export function NotFound() {

    return (
        <>
            <Helmet>
                <title>Você se perdeu</title>
            </Helmet>
            
            <div className="not-found-box">
                <h1>Pagina não encontrada</h1>
                <img src={notFound} alt="404" title="404"/>
                <Link to="/" replace>Ir pra pagina principal</Link>
            </div>
        </>
    )
}