import { useState } from "react";

function Evento (){
    //Onchange
    const [nombre, setNombre] = useState<String>('');

    //SEleccionar color
    const [color, setColor] = useState<string>('');
    const seleccionarColor = (color: string) => {setColor(color)}
    return(
        <>
            <h3>Probando on-change</h3>
            <input  onChange={(e) => {setNombre(e.target.value)}} type="text" placeholder="Introduce el nombre..."></input>
            <p>Nombre: {nombre}</p>
            <br></br>

            <h3>Eventos con parametros</h3>
            <p style={{color: color}}>Color: {color}</p>
            <button onClick={() => seleccionarColor('red')}>Rojo</button>
            <button onClick={() => seleccionarColor('yellow')}>Amarillo</button>
            <button onClick={() => seleccionarColor('green')}>Verde</button>
        
        </>
    )
}

export default Evento;