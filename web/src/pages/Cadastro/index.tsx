import './styles.css'
import { useState } from 'react'

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
        setFormValores(valorFormulario)
    }

    return (
        <main>
            <h1 className="title-cadastro"><span>Prencha</span> o <em>Formulario</em> </h1>
            
            <form onSubmit={Form}>
                <label htmlFor="">Nome</label>
                <input required name='nome' id='nome' type="text" onChange={(e) => onChange(e)}/>
                <label htmlFor="">RG</label>
                <input required name='RG' id='RG' type="number" onChange={onChange}/>
                <label htmlFor="">CPF</label>
                <input required name='CPF' id='CPF' type="number" onChange={onChange}/>
                <label htmlFor="">Email</label>
                <input required name='email' id='email' type="email" onChange={onChange}/>
                <label htmlFor="">Senha</label>
                <input required name='senha' id='senha' type="password" onChange={onChange}/>
                <label htmlFor="">Confirmar Senha</label>
                <input required name='Csenha' id='Csenha' type="password" onChange={onChange}/>
                <label htmlFor="">CEP</label>
                <input required name='CEP' id='CEP' type="number" onChange={onChange}/>
                <label htmlFor="">Cidade</label>
                <input required name='cidade' id='cidade' type="text" onChange={onChange}/>
                <label htmlFor="">Bairro</label>
                <input required name='bairro' id='bairro' type="text" onChange={onChange}/>
                <label htmlFor="">Endereço</label>
                <input required name='endereco' id='endereco' type="text" onChange={onChange}/>
                <label htmlFor="">Número</label>
                <input required name='numero' id='numero' type="number" onChange={onChange}/>
                <label htmlFor="">Complemento</label>
                <input required name='complemento' id='complemento' type="text" onChange={onChange}/>
                <button type='submit'>Enviar</button>
            </form>
        </main>
    )
}