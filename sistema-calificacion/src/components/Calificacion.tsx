import { useState } from "react"

type Calificacion = {
    titulo: string
    maxEstrellas: number
}

function dameArray(valor: number, maximo: number){
   let resultado: string = "";
    for (let index = 0; index < maximo; index++) {
       resultado += index < valor ? "※ " : "– ";
        
    }
    return resultado;
}

function porcentajes(valor: number, maximo: number){
    let opinion = ""
    const porcentaje = (valor / maximo)* 100;
    if(porcentaje <= 0){
        opinion += "Sin calificar"
    } else if(porcentaje <= 25){
        opinion += "Malo"
    }else if(porcentaje <= 50){
        opinion += "Regular"
    }else if(porcentaje <= 75){
        opinion += "Bueno"
    }else{
        opinion += "Excelente"
    }

    return opinion;
}

function MostrarCalificaciones({titulo, maxEstrellas}: Calificacion){
    const [calificacion, setCalificacion] = useState <number> (0);


    return <div>
            <h2>{titulo}</h2>
            <p>Puntuación: {calificacion} de {maxEstrellas} estrellas.</p>
            <p>{porcentajes(calificacion, maxEstrellas)}</p>
            <p>{(dameArray(calificacion, maxEstrellas))}</p>
            <button onClick={() => setCalificacion(0)}>Reset</button>
            <button onClick={() => setCalificacion(calificacion + 1 >= maxEstrellas ? maxEstrellas : calificacion +1)}>+1</button>
           </div>
}



export default MostrarCalificaciones;