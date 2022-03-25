import { useState } from 'react';
import '../styles/calculadora.css'

export default function Calculadora(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resultado, setResultado] = useState()
    
    function somar(){
        setResultado( n1 + n2)
    }
    function multiplicar(){
        setResultado( n1 * n2)
    }
    function dividir(){
        setResultado( n1 / n2)
    }
    function subtrair(){
        setResultado( n1 - n2)
    }
    return(
        <div className="calculadora">
            <h1>Calculadora</h1>

            <input 
            className="titulo-calculadora"
            type="number"
            placeholder="Digite um número:"
            onChange = { (e) => { setN1( e.target.valueAsNumber ) } }
            />
            
            <input 
            className="campo-calculadora"
            type="number"
            placeholder="Digite o segundo número:"
            onChange = { (e) => { setN2( e.target.valueAsNumber ) } }
            />

            <button className="botao-calculadora"
            onClick = { somar } 
            > somar
            </button>
            <p className="resultado">{resultado}</p>
        </div>
    );
}