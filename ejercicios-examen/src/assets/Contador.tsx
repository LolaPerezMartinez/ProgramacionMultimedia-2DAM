import { useState, type JSX } from "react";

type ElementoItem = {
    id: number,
    valor: number,
    timeStamp : Date
}

function ContadorConHistorial () : JSX.Element{

        const [contador, setContador] = useState<number>(0);
        const [historial, setHistorial] = useState<ElementoItem[]>([{
            id: 1, valor: 0, timeStamp: new Date()
        }])

        function AñadirAlHistorial (nuevoValor: number) : void {
                const nuevoItem : ElementoItem = {
                    id: IdMayor(historial) + 1, valor: nuevoValor, timeStamp: new Date() 
                }

                setHistorial([...historial, nuevoItem]);
        }

        function IdMayor(listaItem : ElementoItem[]): number {
           return listaItem.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);
        } 

        const Incrementar = (): void =>{
            const nuevoNumero = contador + 1;
            setContador(nuevoNumero);
            AñadirAlHistorial(nuevoNumero);
        }

        const Decrementar = () : void =>{
            const nuevoNumero = contador - 1;
            setContador(nuevoNumero);
            AñadirAlHistorial(nuevoNumero);
        }

       const Reset = () : void =>{
            const nuevoNumero = 0;
            setContador(0);
            AñadirAlHistorial(nuevoNumero);
       }

    return<>
        <h1>Contador con historial</h1>
        <h2>Contador: {contador}</h2>
        <button onClick={Decrementar}>-</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Incrementar}>+</button>

        <h2>Historico del contador</h2>
        <ul>
            {historial.map(
                (elemento : ElementoItem) => (
                    <li key={elemento.id}>
                        {elemento.id} - {elemento.valor} - {elemento.timeStamp.toLocaleDateString()}
                    </li>
                )
            )}
        </ul>


    
    </>
}

export default ContadorConHistorial;