 import './styles.css'


 export default function Contato() {
    return(
        <main className='main-contato'>
            <h1 className='titulo-contato'>Entre em <em>contato</em> <span>conosco</span></h1>

            <div className='contato-contato'>
                <div className='email-contato'>
                    <label className='label-contato-email'>Email:</label>
                    <input className='contato-input email-input' placeholder='Insira seu email' type='email'/>
                </div>
            </div>
        </main>
    )
 }