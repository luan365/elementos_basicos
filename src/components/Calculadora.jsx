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
            default:
                break;
            }
        }

    return(
        <div className="conteiner-calculadora">
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
                <label htmlFor="somar">Somar</label>
            </div>

                <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="subtrair"
                    name="operacoes"
                    value="subtrair"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="somar">Subtrair</label>
            </div>

            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="multiplicar"
                    name="operacoes"
                    value="multiplicar"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="somar">Multiplicar</label>
            </div>


            <div className="operacao-calculadora">
                <input 
                    type="radio"
                    id="dividir"
                    name="operacoes"
                    value="dividir"
                    onClick={ e => setOperacao( e.target.value ) }
                />
                <label htmlFor="somar">Dividir</label>
            </div>


            <button className="botao-calculadora"
            onClick = { calcular } 
            > Calcular
            </button>
            <p className="resultado">{resultado}</p>
        </div>
    );
}
