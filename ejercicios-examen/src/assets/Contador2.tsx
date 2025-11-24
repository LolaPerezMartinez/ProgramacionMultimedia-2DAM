import { useState, type JSX } from "react";

type Contador = {
    id: number,
    valor: number,
    timeStamp: Date
}

function ContadorConHistorial2(): JSX.Element {
    const [contador, setContador] = useState<number>(0);
    const [historico, setHistorico] = useState<Contador[]>([
        {id: 1, valor: 0, timeStamp: new Date()}
    ])

    const restar = () : void =>{
        const nuevoNumero = contador - 1;
        setContador(nuevoNumero);
        agregarAlHistorico(nuevoNumero)
    }

    const sumar = () : void =>{
        const nuevoNumero = contador + 1;
        setContador(nuevoNumero);
        agregarAlHistorico(nuevoNumero);
    }

    const reset = () : void =>{
        setContador(0);
        setHistorico([{id:1, valor: 0, timeStamp: new Date()}])
    }

    function nextId() : number {
        const maxId = historico.reduce((max, e) => (e.id > max ? e.id : max), 0);
        return maxId + 1;
    }
    const agregarAlHistorico = (numero: number) : void =>{
        const nuevoElemento : Contador = {
            id: nextId(), valor:numero, timeStamp: new Date()
        }

        setHistorico([...historico, nuevoElemento]);
    }

    return(
        <>
        <h1>Contador con historial</h1>
        <h2>Contador: {contador}</h2>

        <button onClick={() => restar()}>-</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => sumar()}>+</button>

        <h2>Historico del contador</h2>
        <ul>
            {historico.map(
                e => <li key={e.id}>{e.id}-{e.valor}-{e.timeStamp.toDateString()}</li>
            )}
        </ul>
        </>
    )
}

export default ContadorConHistorial2;