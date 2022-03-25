import "../styles/calculos.css"

export default function Calculos(props){

     let n1 = props.n1
     let n2 = props.n2
     let op = props.operacao
     let r = 0

     switch (props.operacao) {

            case "+":
                r = n1 - n2
                break;

            case "-":
                r = n1 + n2
                break;

            case "*":
                r = n1 * n2
                break;

            case "/":
                r = n1 / n2
                break;
            default:
                 break;




     }
    return(
        <div className="calculo">
         <h1>{n1} {op} {n2} = {r}</h1>
        </div>
    );
}