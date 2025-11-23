import './App.css';
import MostrarProducto from './components/Producto';
import MostrarTitulo from './components/Tienda';
import CrearContador from './components/Contador';
import MostrarContadorFlexible from './components/contadorFlexible';

/*function CabeceraContadores(){
    return <div>
                <h1>🧮 Contadores Configurables</h1>
                <p>Cada contador tiene configuraciones diferentes</p>
            </div>
}*/

function App(){
  const miArticulo = "Libro";
  return <div>
          <MostrarTitulo nombreTienda={"🛒 Mi Tienda Online"} sloganTienda = {"Los mejores productos al mejor precio"} />
          <MostrarProducto nombre={"Camiseta"} precio={19.99} disponible={true}/>
          <MostrarProducto nombre={"Pantalones"} precio={45.50} disponible={false}/>
          <MostrarProducto nombre={miArticulo} precio={15.50} disponible={true}/>
          <CrearContador/>

          <div className='app'>
            <h1>🧮 Contadores Configurables</h1>
            <p>Cada contador tiene configuraciones diferentes</p>
              <div className='contadores'>
              <MostrarContadorFlexible nombreContador={'🤘 Likes'} inicio={0} escala={1}/>
              <MostrarContadorFlexible nombreContador={'🌟 Estrella'} inicio={100} escala={5}/>
              <MostrarContadorFlexible nombreContador={'🌡️ Temperatura'} inicio={20} escala={2}/>
              <MostrarContadorFlexible nombreContador={'💸 Dinero'} inicio={-50} escala={10}/>
              </div>
          </div>
          
          </div>
}

export default App;
