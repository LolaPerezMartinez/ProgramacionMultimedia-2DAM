import { useState, type JSX } from "react"

type Nota = {
    id: number,
    asignatura: string,
    nota: number
}


function TablasConMedia() : JSX.Element {
    const [asignatura, setAsignatura] = useState<string>('');
    const [nota, setNota] = useState<string>('');
    const [notas, setNotas] = useState<Nota[]>([]);

    const sumaNotas: number = notas.reduce((accum, nota) => (accum + nota.nota), 0);
    const media: number = notas.length <= 0 ? 0 : sumaNotas/ notas.length;

    const AgregarAsignatura = (): void => {
        if(asignatura.trim() === '' || nota === '') return

        const notaNumero = Number(nota);
        if(isNaN(notaNumero) || notaNumero < 0 || notaNumero > 10) return

        const maxId = notas.reduce((max, nota) => (nota.id > max ? nota.id : max), 0);
        let nextId = maxId + 1;

        setNotas([...notas, {id: nextId, asignatura: asignatura, nota: notaNumero}]);
        setAsignatura('');
        setNota('');
    }

    const eliminarNota = (id:number) : void =>{
       setNotas(notas.filter(n => n.id != id));
    }

    return(
        <div>
            <h1>Tabla de notas con media</h1>
            <input type="text" 
                    value={asignatura}
                    onChange={e => setAsignatura(e.target.value)}
                    placeholder="Nombre asignatura"/>
            <input type="number" 
                    value={nota}
                    onChange={e => setNota(e.target.value)}
                    placeholder="Nota(0-10)"/>
            <button onClick={AgregarAsignatura}>Agregar</button>

            <table>
                <thead>
                    <tr>
                        <td>Asignatura</td>
                        <td>Nota</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody> 
                    {notas.map((nota: Nota) =>
                    <tr key={nota.id}>
                        <td>{nota.asignatura}</td>
                        <td>{nota.nota}</td>
                        <td>
                            <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            
            <div>
            <h2>Nota media: {media.toFixed(2)}</h2>
            </div>
            {notas.length === 0 && <p>No hay asignaturas que mostar.</p>}
        </div>
    )
}

export default TablasConMedia;
