import { useState } from "react"

type ContadorFlexible = {
    nombreContador: string
    inicio: number
    escala : number

}

function MostrarContadorFlexible ({nombreContador, inicio, escala} : ContadorFlexible ){
    const [numero, setNumero] = useState(inicio);
        return <div>
            <section className="contador-flexible">
                
                <h2>{nombreContador} : {numero}</h2>
                    <div className="botones">
                    <button onClick={() =>{setNumero(numero - escala)}}> - {escala} </button>
                    <button onClick={() => {setNumero(inicio)}}> Reset </button>
                    <button onClick={() => {setNumero(numero + escala)}}> + {escala} </button>
                    </div>
            </section>
              </div>
        
        ;
}

export default MostrarContadorFlexible;
