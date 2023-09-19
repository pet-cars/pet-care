import './styles.css'
import azul from '../../assets/images/detalhe-azul.png'
import { useState } from 'react'
import axios from 'axios';

const valorFormulario = {
    nome: String,
    RG: Number,
    CPF: Number,
    email: String,
    senha: String,
    Csenha: String,
    CEP: Number,
    cidade: String,
    bairro: String,
    endereco: String,
    numero: Number,
    complemento: String,
}

export default function Cadastro() {

    const [formValores, setFormValores] = useState(valorFormulario);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFormValores((prevState)=> ({
             ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    function Form(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(formValores);
        setFormValores(valorFormulario);

        try {
            axios.post("http://localhost:3333/cadastro",{ 
                   
            //  TODO: mapear o formValores para enviar os dados no backend
                }).then((res) => console.log(res))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className='main-cadastro'>


            <div className='content'>
            <h1 className="title-cadastro"><span>Prencha</span> o <em>Formulario</em> </h1>
            <form onSubmit={Form} className='form-cadastro'>
                <div className='part-1'>          
                    <div>
                        <label htmlFor="" className='label-cadastro'>Nome:</label>
                        <input className='form-campo' required name='nome' id='nome' type="text" onChange={(e) => onChange(e)}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>RG:</label>
                        <input className='form-campo' required name='RG' id='RG' type="number" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>CPF:</label>
                        <input className='form-campo' required name='CPF' id='CPF' type="number" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Email:</label>
                        <input className='form-campo' required name='email' id='email' type="email" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Senha:</label>
                        <input className='form-campo' required name='senha' id='senha' type="password" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Confirmar Senha:</label>
                        <input className='form-campo' required name='Csenha' id='Csenha' type="password" onChange={onChange}/>
                    </div>
                </div>

                <div className='part-2'>

                    <div>
                        <label htmlFor="" className='label-cadastro'>CEP:</label>
                        <input className='form-campo' required name='CEP' id='CEP' type="number" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Cidade:</label>
                        <input className='form-campo' required name='cidade' id='cidade' type="text" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Bairro:</label>
                        <input className='form-campo' required name='bairro' id='bairro' type="text" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Endereço:</label>
                        <input className='form-campo' required name='endereco' id='endereco' type="text" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Número:</label>
                        <input className='form-campo' required name='numero' id='numero' type="number" onChange={onChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="" className='label-cadastro'>Complemento:</label>
                        <input className='form-campo' required name='complemento' id='complemento' type="text" onChange={onChange}/>
                    </div>
                </div>
                
                
                <div className='botao'>
                    <button type='submit' className='enviar-cadastro'>Enviar</button>
                </div>
            </form>
            </div>
        </main>
    )
}