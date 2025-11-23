import { useState } from "react";
import { Fragment } from "react/jsx-runtime"


function MiComponente() {
    //1.Mostrar/ocultar
    const [visible, setVisible] = useState<Boolean>(true);

    //2.Alternar valores
    const [claro, setClaro] = useState<boolean>(true);

    //3. Transicion de estado simple
    const [estado, setEstado] = useState<string>('desayunando');

    //4.
    const estados : string [] = ['desayunando', 'comiendo', 'merendando', 'cenando'];
    const [estado2, setEstado2] = useState<number>(0);
   

  return (
    //aqui solo puede haber un componente que lo contiene todo por eso todo se mete dentro de div
    //Fragment se puede encontrar vacío, es lo mas habitual
    <Fragment>
    <h1>Fragmentos. Clase 2</h1>

    <h2>Mostrar/Ocultar texto al pulsar un boton</h2>
    {visible && <p>Texto a ocultar</p>}
    <button onClick={() => {setVisible(!visible)}}>{visible ? "Ocultar" : "Mostrar"}</button>
    <br></br>

    <h2>Alternar valores</h2>
    {claro ? <>
                <p style={{color: 'cyan'}}>El color claro me anima</p>
                <p>Feliz</p>
            </>
            : 
            <>
                <p style={{color: 'brown'}}>El color oscuro me deprime</p>
                <p>Amargada</p>
            </>
            }
    <p>El color es: {claro ? "claro" : "oscuro"}</p>
    <button onClick={() => {setClaro(!claro)}}>Intercambiar tono del color</button>
    <br />

    <h2>Transicion de estado simple</h2>
    <p>Estado: {estado}</p>
    <button onClick={() => {
        setEstado(estado === 'desayunando' ? 'comiendo' : estado === 'comiendo' ? 'cenando': 'desayunando')}}>Cambiar comida</button>
    <br />

    <h2>Transicion de estado usando array</h2>
    <p>Estado: {estados[estado2]}</p>
    <button onClick={() => {setEstado2(estado2 === estados.length-1 ? 0 : estado2 + 1) }}>Cambiar estado</button>
    </Fragment>
  )
}

export default MiComponente