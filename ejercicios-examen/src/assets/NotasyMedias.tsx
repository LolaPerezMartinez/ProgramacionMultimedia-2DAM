import { useState, type JSX } from "react";

type Nota ={
    id: number,
    nombre: string,
    nota: number

}

function NotasTabla() : JSX.Element {
    const [asignatura, setAsignatura] = useState<string>('');
    const [nota, setNota] = useState<string>('');
    const [notas, setNotas] = useState<Nota[]>([]);

    const sumaNotas = notas.reduce((accum, n) => (accum + n.nota), 0);
    const notaMedia = notas.length <= 0 ? 0 : sumaNotas/ notas.length;

    const nextId = () : number =>{
        const maxId = notas.reduce((max, n) => (n.id > max ? n.id : max), 0);
        return maxId + 1;

    }
    const agregarAsignatura = () : void =>{
        if(asignatura.trim() === '' || nota === '') return

        const notaNum = Number(nota);
        if(isNaN(notaNum) || notaNum < 0 || notaNum > 10) return 

        const nuevaNota : Nota = {id: nextId(), nombre: asignatura, nota: notaNum};

        setNotas([...notas, nuevaNota]);
        setAsignatura('');
        setNota('');
    }

    const eliminarAsignatura = (id: number) : void =>{
        setNotas( notas.filter(n => n.id !== id));
    }
    return(
        <>
        <h1>Tabla de notas</h1>
        <input type="text" 
                value={asignatura}
                placeholder="Nombre asignatura"
                onChange={(e) => setAsignatura(e.target.value)}/>
        
        <input type="number" 
               value={nota}
               min="0"
               max="10"
               step=".1"
               placeholder="Nota(0-10)"
               onChange={(e) => setNota(e.target.value)}/>

        <button onClick={() => agregarAsignatura()}>Enviar</button>

        <table>
            <thead>
                <tr>
                    <td>Asignatura</td>
                    <td>Nota</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {notas.map(n =>(
                    <tr key={n.id}>
                        <th>{n.nombre}</th>
                        <th>{n.nota.toFixed(2)}</th>
                        <th>
                            <button onClick={() => eliminarAsignatura(n.id)}>Eliminar</button>
                        </th>
                    </tr>
                )
                )}
            </tbody>
        </table>
                <h2>Nota media: {notaMedia.toFixed(2)}</h2>
        </>
    )
}

export default NotasTabla;