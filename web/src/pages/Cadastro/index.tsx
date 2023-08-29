import './styles.css'
import { useState } from 'react'

const valorFormulario = {
    nome: '',
    RG: Number,
    CPF: Number,
    email: '',
    senha: '',
    Csenha: '',
    CEP: Number,
    cidade: '',
    bairro: '',
    endereco: '',
    numero: Number,
    complemento: '',
}

export default function Cadastro() {

    const [formValores, setFormValores] = useState(valorFormulario);

    const onChange = (e : any) => {
        setFormValores((prevState)=> ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    function Form(e : any){
        e.preventDefault();       
        console.log(formValores);
        setFormValores(valorFormulario)
    }

    return (
        <main>
            <h1 className="title-cadastro"><span>Prencha</span> o <em>Formulario</em> </h1>
            
            <form onSubmit={Form}>
                <input required name='nome' id='nome' type="text" onChange={onChange}/>
                <input required name='RG' id='RG' type="number" onChange={onChange}/>
                <input required name='CPF' id='CPF' type="number" onChange={onChange}/>
                <input required name='email' id='email' type="email" onChange={onChange}/>
                <input required name='senha' id='senha' type="password" onChange={onChange}/>
                <input required name='Csenha' id='Csenha' type="password" onChange={onChange}/>
                <input required name='CEP' id='CEP' type="number" onChange={onChange}/>
                <input required name='cidade' id='cidade' type="text" onChange={onChange}/>
                <input required name='bairro' id='bairro' type="text" onChange={onChange}/>
                <input required name='endereço' id='endereco' type="text" onChange={onChange}/>
                <input required name='numero' id='numero' type="number" onChange={onChange}/>
                <input required name='complemento' id='complemento' type="text" onChange={onChange}/>
                <button type='submit'>Enviar</button>
            </form>
        </main>
    )
}