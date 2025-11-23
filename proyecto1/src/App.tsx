
import './App.css'
import Salu2 from './components/Salu2';
import Saludo from './components/Saludo';

//Solo puede retornar un elemento aunque dentro tenga varios elementos y subelementos
function App(){
  return <div>Hola soy tu primer componente desde App.tsx ®️
              <Saludo/>
              <Salu2 nombre={'Migle'} edad={21}/>
              <Salu2 nombre={'Ana'} edad={28}/>
          </div>
}

export default App;