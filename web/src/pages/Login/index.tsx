import './styles.css'
import detalhe from '../../assets/images/footer-dec.png'
import { NavLink } from 'react-router-dom'
export default function Login(){

    return(
        <main className='main-login'>
            <h1 className='titulo-login'><span>Login</span></h1>
            <form className='form-login'>
                <div className='conteudo'>
                    <div className='email'>
                        <label className='label-login'>Email:</label>
                        <input className='form-campo-login' type='email' placeholder='Digite seu email'/>
                    </div>

                    <div className='senha'>
                        <label className='label-login'>Senha:</label>
                        <input className='form-campo-login' type='password' placeholder='Digite sua senha'/>
                    </div>

                    <div className='lembre'>
                        <label className='lembre-de-mim' htmlFor="">Lembre de mim</label>
                        <input type='checkbox'/>
                    </div>
                    <div className='botao'>
                        <button className='botao-login' type='submit'>Entrar</button>
                    </div>

                    <div className='cadastrar'>    
                        <a className='loginC' href="/cadastro">
                            Não possui uma conta? crie uma agora
                        </a>
                    </div>
                </div>

                <img className='detalhe' src={detalhe}/>
            </form>
        </main>
    )
}