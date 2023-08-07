import "../../global.css"
import "./styles.css"
import logo from "../../assets/images/logo.png"

export default function Home() {
    return (
        <>
            <header>
                <nav>
                    <div className="menu-content">
                        <img src={logo} alt="logo"/>
                        <ul className="menu">
                            <li className="menu-item">Início</li>
                            <li className="menu-item">Sobre</li>
                            <li className="menu-item">Contato</li>
                            <li className="menu-item">Login</li>
                            <button className="button">Cadastre-se</button>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}