import "./styles/global.css";
import Comp_basico from "./components/Comp_basico";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Calculadora from "./components/Calculadora";

export default function App() {
    return (
        <div className="app">
            <h1>App</h1>

             <hr />
            <Formulario />
            <Calculadora />
        </div>
    );
}

