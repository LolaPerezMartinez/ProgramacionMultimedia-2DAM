// FRAGMENTO <Fragment> </Fragment> o simplemente <>  </>

import { useState } from "react";

//import { Fragment } from "react/jsx-runtime";

function MiComponente(){
    /* es un estado que puede ser cambiado */
    //1.Componente mostrar/ocultar algo
    const [visible, setVisible] = useState<boolean>(true);

    //2. Mostrar una u otra cosa
    const [afirmativo, setAfirmativo] = useState<boolean>(true);

    //3. Cambiar entre estados: modo 1
    const [estado, setEstado] = useState<string>('despierto');

    const cambiarEstado = () => {
        if(estado === 'despierto'){
            setEstado('descansando');
        }else if(estado === 'descansando'){
            setEstado('durmiendo');
        }else{
            setEstado('despierto');
        }
    }
    
    //4. Cambio entre estados: modo 2
    const listaEstados: string [] = ['estado A', 'estado B', 'estado J', 'estado K'];
    const [idxEstado, setIdxEstado] = useState<number>(0);
    
    
    //5. onChange
    const [textoIntroducido, setTextoIntroducido] = useState<string>("");

    return(
        <>
            <h1>Fragment</h1>
            <h2>Componente siempre visible</h2>
            <p>Esto es un párafo siempre visible </p>
            <small>Fin del componente visible</small> 
            <br></br>

            <h2>Componente mostrar/ocultar algo</h2>
            {/* si pulsamos en el botón, nos demuestra el párrafo */}
            {visible && <p>Esto es un párafo siempre ocultable </p>}
            <button onClick={()=>{setVisible(!visible)}}>{visible ? "Ocultar" : "Mostrar"}</button>
            <br />
            <small>Fin del componente mostrar/ocultar</small> 


            <h2>Mostrar una u otra cosa</h2>
            {afirmativo ? (
                <><h3>¿Qué acabo de hacer?</h3>
                  <p>Acabo de afirmar algo</p>
                </>) : (
                    
                <> 
                   <p>Acabo de negar algo</p>
                </>)}
                    
            <button onClick={() => {setAfirmativo(!afirmativo)}}>{afirmativo ? "Negar" : "Afirmar"}</button>
            <br/>
            <small>Fin del mostrar una u otra cosa</small> 

            <h2>Cambio entre estados (modo 1 : pocos elementos)</h2>
            <p>Estado: {estado} </p>
            <button onClick={cambiarEstado}>Cambiar estado</button>
            <br/>
            <small>Fin del mostrar/ocultar</small> 

            <h2>Cambio entre estados (modo 2 : más elementos)</h2>
            <p>Estado: {listaEstados[idxEstado]} </p>
            <button onClick={() => {
                setIdxEstado(idxEstado === listaEstados.length -1 ? 0 : idxEstado + 1);
            }}>Cambiar estado</button>
            <br/>
            <small>Fin del mostrar/ocultar</small> 
            
            <h2>Evento onChange</h2>
           <input type="text" placeholder="Introduce un texto..." 
           //e.target hace referencia al elemento que provocó el evento, en este caso, el input.
           //e.target.value es el texto que el usuario ha escrito dentro del input.
                    onChange={(e) =>{setTextoIntroducido(e.target.value)}}>

            </input>
           <p>Estas escribiendo: {textoIntroducido}</p>
            <br/>
            <small>Fin del evento onChange</small> 
        </>
    )

}

export default MiComponente;