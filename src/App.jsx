import "./styles/global.css";
import Aluno from "./components/Aluno"
import Calculadora from "./components/Calculadora";

export default function App() {
    return (
        <div className="app">
            <h1>App</h1>

             <hr /> 

            <Aluno />
            <Calculadora />
        </div>
    );
}

