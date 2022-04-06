import { useState } from 'react';
import '../styles/calculadora.css'

export default function Calculadora(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resultado, setResultado] = useState()
    const [operacao, setOperacao] = useState()
    
    function calcular()
    {
        switch(operacao){

            case "somar":
                setResultado( n1 + n2 )
                break;
            
            case "multiplicar":
                setResultado( n1 * n2 )
                break;
            
            case "subtrair":
                setResultado( n1 - n2 )
                break;
            
            case "dividir":
                setResultado( n1 / n2 )
                break;
            }
        }

    return(
        <div className="calculadora">
            <h1>Calculadora</h1>

            <input 
                className="campo-calculadora"
                type="number" 
                placeholder="Primeiro número" 
                onChange = { e => setN1( e.target.valueAsNumber ) }
            />

            <input 
                className="campo-calculadora"
                type="number" 
                placeholder="Segunda número" 
                onChange = { e => setN2( e.target.valueAsNumber ) }
            />

            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="somar"
                    name="operacoes"
                    value="somar"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                </div>
                <label htmlFor="somar">Somar</label>


            <button className="botao-calculadora"
            onClick = { calcular } 
            > Calcular
            </button>
            <p className="resultado">{resultado}</p>
        </div>
    );
}
