import { useState, type JSX } from "react"

type Contador ={
    id: number,
    valor:number,
    timeStamp: Date
}

function ContadorConHistorial () : JSX.Element {
    const [contador, setContador] = useState<number>(0);
    const [historial, setHistorial] = useState<Contador[]>([]);

    function nextId (lista: Contador[]): number {
        const idMaximo = lista.reduce((max, elemento) => (elemento.id > max ? elemento.id : max), 0);
        return idMaximo + 1;
    }
    const agregarAlHistorial = (nuevoValor: number) : void =>{
        const nuevoDato : Contador = {
            id: nextId(historial), valor: nuevoValor, timeStamp: new Date()
        }
        setHistorial([...historial, nuevoDato]);
    }
    const aumentar = () : void => {
        const nuevoValor = contador + 1;
        setContador(nuevoValor);
        agregarAlHistorial(nuevoValor);
    }

    const disminuir = () : void => {
        const nuevoValor = contador - 1;
        setContador(nuevoValor);
        agregarAlHistorial(nuevoValor);
    }

    const reset = () : void => {
        setContador(0);
        setHistorial([{id:1, valor: 0, timeStamp: new Date()}]);
    }

    return (
        <div>
            <div>
            <h1>Historial con contador</h1>
            <h2>Contador: {contador}</h2>
            <button onClick={disminuir}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={aumentar}>+</button>
            </div>

            <div>
                <h2>Historico del contador</h2>
                <ul>
                    {historial.map((e : Contador) => (
                        <li key={e.id}>ID: {e.id} |  Valor: {e.valor} | Time: {e.timeStamp.toLocaleDateString()}</li>
                    ))}
                </ul>

                <h3>Cantidad de elementos del historico: {historial.length}</h3>
            </div>


        </div>
    )
}

export default ContadorConHistorial;