import { NavLink } from 'react-router-dom'
import './styles.css'

export function MobileMenu(){
    return(
        <header className='menu-mobile'>
            <ul className="menu-content">
                    <li className="menu-itemB">
                        <NavLink to="/">
                            Início
                        </NavLink>
                    </li>
                    <li className="menu-itemB">
                        <NavLink to="/Sobre">
                            Sobre
                        </NavLink>
                    </li>
                    <li className="menu-itemB">
                        <NavLink to="/contato">
                            Contato
                        </NavLink>
                    </li>
                    <li className="menu-itemB">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <button className="buttonB">
                        <NavLink to="/cadastro">Cadastre-se</NavLink>
                    </button>
            </ul>
        </header>
    )
}