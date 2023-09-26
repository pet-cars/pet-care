import "./styles.css"
import logo from "../../assets/images/logo.png"

import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink to="/">
                            Início
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/Sobre">
                            Sobre
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/contato">
                            Contato
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <button className="button">
                        <NavLink to="/cadastro">Cadastre-se</NavLink>
                    </button>
                </ul>
            </nav>
        </header>
    )
}