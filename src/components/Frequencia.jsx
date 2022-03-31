import '../styles/frequencia.css'
import { useState } from 'react';

export default function Formulario(){

    const [nome, setNome] = useState("")
    const [nota, setNota] = useState("")
    const [frequencia, setFrequencia] = useState("")
    const [resultado, setResultado] = useState("")
    
    function mostrarResultado(){

        
        if (nota >= 6 && frequencia >= 75) (
            setResultado("Aprovado :D")
            )
            else(
                
                setResultado("reprovado :(")
                )
            }
  
      
    return(

        

        <div className='frequencia'>
            <h1>Tarefinha</h1>

            <input 
            className="titulo-frequencia"
            type="text"
            placeholder="Digite seu nome:"
            onChange = { (e) => { setNome( e.target.value ) } }
            />
            
            <input 
            className="titulo-frequencia"
            type="number"
            placeholder="Digite sua nota:"
            onChange = { (e) => { setNota( e.target.valueAsNumber ) } }
            />

            <input 
            className="titulo-frequencia"
            type="number"
            placeholder="Digite sua nota:"
            onChange = { (e) => { setFrequencia( e.target.valueAsNumber ) } }
            />

            <button className='botao-frequencia'
            onClick={mostrarResultado}>
                Ok
            </button>

            <p
            className='mensagem-frequencia'>
                {resultado}
            </p>
            
        </div>
    );
}