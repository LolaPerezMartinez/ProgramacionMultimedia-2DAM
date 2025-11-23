//useState:
/*Lo defino como constante
*/

import { useState } from "react"

function CrearContador(){
    //Estoy arrancando el contador en 0
    //SetNumero asigna un numero como un setter
    //Es como si el getNumero fuera numero
    const [numero, setNumero] = useState(0);
    return (<div className="contador">
           
           <h2>Mi primer contador</h2>
            <h3>Contador: {numero}</h3>
            <button onClick={() =>{setNumero(numero + 1)}}>+1</button>
            <button onClick={() =>{setNumero(numero <= 0 ? 0 : numero- 1)}}>-1</button>
            <button onClick={() =>{setNumero(0)}}>Reset</button>


            </div>)
}

export default CrearContador;