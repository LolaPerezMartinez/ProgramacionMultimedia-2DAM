import { useState, type JSX } from "react"

type Tarea = {
    id: number,
    texto: string,
    completada: boolean
}

function ListasTareas() : JSX.Element {
    const [tarea, setTarea] = useState<string>('');
    const [tareas, setTareas] = useState<Tarea[]>([
        {id: 1, texto: 'Comprar el pan', completada: false},
        {id: 2, texto: 'Estudiar React', completada: false},
        {id: 3, texto: 'Poner lavadora', completada: false}
    ]);

    function nextId(): number {
        const maxId = tareas.reduce((max, tarea) => (tarea.id > max ? tarea.id : max), 0);
        return maxId + 1;
    }
    const agregarTarea = (nuevoTexto: string): void =>{
        const nuevaTarea : Tarea = {
            id: nextId(), texto: nuevoTexto, completada: false
        }
        setTareas([...tareas, nuevaTarea]);
        setTarea('');
    }

    const toggleTarea = (id: number) : void =>{
        setTareas(tareas.map((tarea) => (tarea.id === id ) ? {...tarea, completada: !tarea.completada} : tarea));
        
    }

    const borrarTarea = (id: number) : void =>{
        setTareas(tareas.filter(tarea => tarea.id !== id));
    }

    const cambiarNombre = (id: number, nuevoTexto: string) : void =>{
        setTareas(tareas.map((tarea) => (tarea.id === id) ? {...tarea, texto : nuevoTexto} : tarea));
    }
    return(
        <>
        <h1>Listas</h1>
        <h2>Checkear tareas</h2>
        <ul>
            {tareas.map(
                (t :Tarea) => (
                    <li key={t.id}>
                        <input type="checkbox" 
                        checked={t.completada}
                        onChange={() => {toggleTarea(t.id)}}
                        />{t.texto}: {t.id}
                        <button onClick={() => borrarTarea(t.id)}>Borrar</button>
                        <button onClick={() => cambiarNombre(t.id, tarea)}>Cambiar nombre</button>
                    </li>
                )
            )}
        </ul>

        <h2>Agregar tareas</h2>
        <input type="text" 
               value={tarea}
               onChange={(e) =>{setTarea(e.target.value)}}
               placeholder="Nombre de la tarea..."/>
        <button onClick={() => agregarTarea(tarea)}>Agregar tarea</button>

        </>
    )
}

export default ListasTareas;