import MostrarCalificaciones from "./components/Calificacion";
import './App.css'
import MiComponente from "./components/MiComponente";


function App(){
  return <div>
          <h1>🌟 Sistema de calificaciones</h1>
          <p>Haz click en las estrellas para calificar</p>
          <MostrarCalificaciones titulo={"🍕 Califica la pizza"} maxEstrellas={5} calificacionInicial={0}/>
          <MiComponente/>

        </div>
}

export default App;
