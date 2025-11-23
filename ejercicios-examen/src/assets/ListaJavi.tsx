import { useState } from "react";


function Listas() {
const [nombreTarea, setNombreTarea] = useState('');
const [tareas, setTareas] = useState([   
        {id: 1, texto: 'Comprar pan', completada: true},
        {id: 2, texto: 'Estudiar React', completada: false},
        {id: 3, texto: 'Hacer ejercicio', completada: true}]);

function toggleTarea(id: number) {  
    setTareas(tareas.map((t)=> 
        (t.id === id ? {...t, completada:!t.completada} : t
    )))
}

function agregarTarea(nombre : string) {
    let max = 0;
    tareas.map((t)=>{max = t.id > max ? t.id: max});
    const nuevaTarea = {id: max + 1, texto: nombre, completada: false};
    setTareas([...tareas, nuevaTarea]);
}    

function borrarTarea(id: number) {
    setTareas(tareas.filter(t=>t.id!==id))
}

function editarTarea(id: number, nombre: string){
        setTareas(tareas.map((t)=> 
        (t.id === id ? {...t, texto: nombre} : t
    )))
}

return (
    <>
        <h1>Listas</h1>
        <h2>Primer ejemplo: checkar tareas</h2>
        <ul>
            {tareas.length === 0 && <p>Todavía no hay tareas que mostrar.</p>}
            {tareas.map(t=> (
                <li key={t.id}>
                    <input 
                        type="checkbox" 
                        checked={t.completada}
                        onChange={()=>{toggleTarea(t.id)}}/>{t.texto + ': ' + t.id}
                    <button key={t.id} onClick={()=>{borrarTarea(t.id)}}>Borrar</button>
                    <button key={t.id} onClick={()=>{editarTarea(t.id, nombreTarea)}}>Cambiar nombre</button>
                </li>))}
        </ul>

        <h2>Segundo ejemplo: agregar tareas</h2>
        <input onChange={(e)=>{setNombreTarea(e.target.value)}} type="text" placeholder="Nombre de la tarea ..."/>
        <br /><br />
        <button onClick={()=>{agregarTarea(nombreTarea)}}>Agregar tarea: {nombreTarea}</button>
    </>
  )
}

export default Listas;