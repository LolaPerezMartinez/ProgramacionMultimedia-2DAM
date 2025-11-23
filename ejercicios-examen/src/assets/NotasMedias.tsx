import { useState, type JSX } from "react";

type Nota= {
    id: number,
    asignatura: string,
    nota: number,
}

function TablasConMedia(): JSX.Element {
        const [asignatura, setAsignatura] = useState<string>('');
        const [nota, setNota] = useState<string>('');
        const [notas, setNotas] = useState<Nota[]>([]);

        let sumaNotas: number = notas.map(n => n.nota).reduce((accum, nota)=> (accum + nota), 0);
        let notaMedia: number =  notas.length > 0 ? sumaNotas/notas.length : 0;

        const agregarNota= () : void =>{
            if(asignatura.trim() === '' || nota === '') return

            const numNota = Number(nota);
            if(isNaN(numNota) || numNota < 0 || numNota > 10) return

            let idMaximo = notas.reduce((max, n) => ((n.id > max ? n.id : max)), 0);
            let nextId = idMaximo +1;

            setNotas([...notas, {id: nextId, asignatura: asignatura, nota: numNota}])
            setAsignatura('');
            setNota('');
        }
         
        const eliminarAsignatura = (id: number) : void =>{
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
               onChange={e=> setNota(e.target.value)}
               placeholder="Nota (0-10)"/>
        <button onClick={agregarNota}>Agregar</button>

        <table>
            <thead>
                <tr>
                    <td>Asignatura</td>
                    <td>Nota</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {notas.map((n : Nota) => 
                <tr key={n.id}>
                   <td>{n.asignatura}</td>
                   <td>{n.nota.toFixed(1)}</td>
                   <td>
                        <button onClick={() => eliminarAsignatura(n.id)}>Eliminar</button>
                   </td>
                </tr>
                )}
            </tbody>
        </table>

        <h2>Nota media: {notaMedia.toFixed(2)}</h2>
    </div>

    )
}

export default TablasConMedia;