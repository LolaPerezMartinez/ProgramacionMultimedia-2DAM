
import { useState } from "react";

function MostrarMiComponente (){
    //1.Fragmento ocultar/mostrar
    const [visible, setVisible] = useState<boolean>(true);

    //2.Mostrar una cosa u otra
    const [afirmativo, setAfirmativo] = useState<boolean>(true);

    //3. Cambiar estados, pocos elementos
    const [estado, setEstado] = useState<string>('despierto');

    const cambiarEstado = () =>{
        if(estado === 'despierto'){
            setEstado('descansando');
        }else if(estado === 'descansando'){
            setEstado('durmiendo');
        }else{
            setEstado('despierto');
        }
        return estado;
    }

    //4. Cambiar entre estado varios elementos
   const listaEstados: string [] = ['Estado A', 'Estado B', 'Estado J','Estado K'];
   const [indiceEstado, setIndiceEstado] = useState<number>(0);

   //5.OnChange
   const [textoIntroducido, setTextoIntroducido] = useState<string>("");


    return(
    <>
    <h1>Fragmento ocultar/mostrar</h1>
    {visible && <p>Muestro este párrafo</p>}
    <button onClick={()=> setVisible(!visible)}>{visible ? "Ocultar": "Mostrar"}</button>
    <br></br>

    <h1>Fragmento uno u otro</h1>
   {afirmativo ? (
        <>
        <h2>¿Que es lo que he hecho?</h2>
        <p>Acabo de afirmar algo</p>
        </>
   ) : (
        <>
        <h2>¿Que es lo que he hecho?</h2>
        <p>Acabo de negar algo</p>
        </>
   )}
    <button onClick={() => setAfirmativo(!afirmativo)}>{afirmativo ? "Negar" : "Afirmar"}</button>
    <br></br>

    <h1>Cambiar entre varios estados. Pocos elementos</h1>
    <p>El estado actual es {estado}</p>
    <button onClick={() =>{setEstado(cambiarEstado)}}>Cambiar estado</button>
    <br></br>

    <h1>Cambiar entre varios estados. Muchos elementos</h1>
    <p>Estado: {listaEstados[indiceEstado]}</p>
    <button onClick={() => {setIndiceEstado(indiceEstado +1 < listaEstados.length ? indiceEstado + 1 : 0)}}>Cambiar Estado</button>
    <br></br>

    <h1>OnChange</h1>
    <input type="text" placeholder="Escribe lo que te apetezca... "
        onChange={(e)=> {setTextoIntroducido(e.target.value)}}
    ></input>
    <p>Texto introducido: {textoIntroducido}</p>
   </>
    )
}

export default MostrarMiComponente;