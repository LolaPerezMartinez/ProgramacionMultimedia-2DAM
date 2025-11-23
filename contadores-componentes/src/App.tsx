import './App.css';
import MostrarContadorFlexible from './components/ContadorFlexible';
import MiComponente from './components/MiComponente';
import Evento from './components/Evento';
import Listas from './components/Listas';
import ListasPractica from './components/ListasPracticando';


/*function CabeceraContadores(){
    return <div>
                <h1>🧮 Contadores Configurables</h1>
                <p>Cada contador tiene configuraciones diferentes</p>
            </div>
}*/

function App(){
  return <div>
          <div className='app'>
            <h1>🧮 Contadores Configurables</h1>
            <p>Cada contador tiene configuraciones diferentes</p>
              <div className='contadores'>
                <MostrarContadorFlexible nombreContador={'🤘 Likes'} inicio={0} escala={1}/>
                <MostrarContadorFlexible nombreContador={'🌟 Estrella'} inicio={100} escala={5}/>
                <MostrarContadorFlexible nombreContador={'🌡️ Temperatura'} inicio={20} escala={2}/>
                <MostrarContadorFlexible nombreContador={'💸 Dinero'} inicio={-50} escala={10}/>
              </div>
              <MiComponente/>
              <Evento/>
              <Listas/>
              <ListasPractica/>
          </div>
          
          </div>
}

export default App;
