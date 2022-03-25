import { useState } from 'react';
import '../styles/formulario.css'

export default function Formulario(){

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [mensagem, setMensagem] = useState("")
    
    function concatenar(){
        setMensagem("Olá! " + nome + " " + sobrenome + ", seja bem-vindo.")
    }
    return(
        <div className="formulario">
            <h1>States em Componentes Controlados</h1>

            <input 
            className="titulo-formulario"
            type="text"
            placeholder="Digite seu nome:"
            onChange = { (e) => { setNome( e.target.value ) } }
            />
            
            <input 
            className="campo-formulario"
            type="text"
            placeholder="Digite seu sobrenome:"
            onChange = { (e) => { setSobrenome( e.target.value ) } }
            />

            <button className="botao-formulario"
            onClick = { concatenar } 
            > Concatenar
            </button>
            <p className="mensagem-formulario">{mensagem}</p>
        </div>
    );
}