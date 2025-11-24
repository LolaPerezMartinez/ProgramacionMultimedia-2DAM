import { useState, type JSX } from "react"

type Tarea={
    id: number,
    texto:string,
    realizada: boolean
}

function Listas2() : JSX.Element {
    const [tarea, setTarea] = useState<string>('');
    const [tareas, setTareas] = useState<Tarea[]>([
        {id: 1, texto: 'Comprar el pan', realizada: false},
        {id: 2, texto: 'Estudiar React', realizada: false},
        {id: 3, texto:'Hacer ejercicio', realizada: false}
    ])
   
    const toggleTarea = (id:number) : void =>{
        setTareas(tareas.map((t) => (t.id === id) ? {...t, realizada : !t.realizada} : t))
    }

    const eliminarTarea = (id: number): void => {
        setTareas(tareas.filter(t => t.id !== id));
    }

    const modificarTarea = (id:number, nuevoTexto: string) : void =>{
        setTareas(tareas.map(t => (t.id === id) ? {...t, texto: nuevoTexto} : t));
    }

    const agregarTarea = (nuevoTexto: string) : void =>{
       const idMaximo = tareas.reduce((max, t) => (t.id > max ? t.id : max), 0);
       const nextId = idMaximo + 1;
       const nuevaTarea: Tarea = {id: nextId, texto: nuevoTexto, realizada: false} 
       setTareas([...tareas, nuevaTarea]);
       setTarea('');
    }

    return(
    <>
        <h1>Listas de tareas</h1>
        <h2>Checkear tareas</h2>
            <ul>
                {tareas.length=== 0 && <p>No hay tareas que mostrar.</p>}
                {tareas.map(
                    (t) => <li key={t.id}>
                        <input type="checkbox" 
                               checked={t.realizada}
                               onChange={() => toggleTarea(t.id)}/>{t.texto}-{t.id}
                               <button onClick={() => eliminarTarea(t.id)}>Borrar</button>
                               <button onClick={() => modificarTarea(t.id, tarea)}>Modificar</button>
                    </li>
                )}
            </ul>
        <h2>Agregar tareas</h2>
        <input type="text" 
               value={tarea}
               onChange={(e) => setTarea(e.target.value)}
               placeholder="Nombre de la tarea..."/>
        <button onClick={() => agregarTarea(tarea)}>Agregar Tarea</button>
    </>

    )
}

export default Listas2;