import '../styles/aluno.css'
import { useState } from 'react';

export default function Formulario(){

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [logado, setLogado] = useState("")


        function Login(){

            if (login == "usuario" && senha == 123456) (
                setLogado(`Seja bem vindo ${login}`)
                )
                else(
                    
                    setLogado("usuário ou senha incorreta :(")
                    )
                }
            
  
      
    return(

        <div className='aluno'>
            <h1>Tarefinha</h1>

            <input 
            className="titulo-aluno"
            type="text"
            placeholder="Login:"
            onChange = { (e) => { setLogin( e.target.value ) } }
            />
            
            <input 
            className="titulo-aluno"
            type="number"
            placeholder="Senha:"
            onChange = { (e) => { setSenha( e.target.valueAsNumber ) } }
            />


            <button className='botao-aluno'
            onClick={Login}>
                Login
            </button>

            <p
            className='mensagem-aluno'>
                {logado}
            </p>
            
        </div>
    );
}