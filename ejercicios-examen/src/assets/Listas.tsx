import { useState, type JSX } from "react"

type Tarea = {
    id: number,
    texto: string
}

function ListaTareas() : JSX.Element{
    const [tarea, setTarea] = useState<string>('');
    const [tareas, setTareas] = useState<Tarea[]>([]);

    const agregarTarea = (texto: string) : void =>{
        if(texto.trim() === '') return

        const idMaximo = tareas.reduce((max, tarea) => (tarea.id > max ? tarea.id : max), 0);
        const nextId= idMaximo + 1;

        setTareas([...tareas, {id: nextId, texto: texto}]);
        setTarea('');
    }

    const borrarTarea = (id:number) : void =>{
        setTareas(tareas.filter(t => t.id !== id));
    }

    const cambiarTarea = (id:number, textoNuevo: string): void  => {
            setTareas(tareas.map(t =>(
            (t.id === id) ? {...t, texto:textoNuevo} : t
       )))
       
    }
    return(
        <div>
            <h1>Listas</h1>
            <h2>Checkear Tareas</h2>
            <div>
                {tareas.length === 0 && <p>Todavía no hay tareas que mostrar.</p>}
                {tareas.map((t:Tarea) =>(
                    <div key={t.id} className="tareas">
                        <input type="checkbox"
                        />{t.texto}: {t.id}
                        <button onClick={() => borrarTarea(t.id)}>Borrar</button>
                        <button onClick={() => cambiarTarea(t.id, tarea)}>Cambiar nombre</button>
                    </div>
                ))}
            </div>
            

            <h1>Agregar Tareas</h1>
            <input type="text" 
                   value= {tarea}
                   onChange={e => setTarea(e.target.value)}
                   placeholder="Nombre de la tarea..."/>
            <button onClick={() => agregarTarea(tarea)}>Agregar tarea</button>

        </div>
    )
}

export default ListaTareas;