import { useState } from "react";

function ListasPractica (){
    const [tareas, setTareas] = useState(
        [{id: 1, texto: 'Poner lavadora', realizada: true},
        {id:2, texto: 'Descansar', realizada: false},
        {id:3, texto: 'Estudiar React', realizada: true}]
    );

    const [nuevaTarea, setnuevaTarea] = useState<string>('');

    function cambiarTarea(id: number){
       setTareas(tareas.map(t => t.id === id ? {...t, realizada:!t.realizada} : t)); 
    }  ;

    function removeTarea(id:number){
       setTareas(tareas.filter(t => t.id !== id)); 
    }

    function modificarTarea(id:number, textoModificado: string){
        setTareas(tareas.map(t =>t.id === id ? {...t, texto:textoModificado} : t))
    }

    function addTarea(tarea:string){
        let idMax = 0;
        tareas.map(t => t.id > idMax ? idMax : t.id);
        const tareaNueva = {id: idMax + 1, texto: tarea, realizada: false}
        setTareas([...tareas, tareaNueva]);
        
    }
    

    return(
        <>
        <h1>Practicando en casa</h1>
        <h2>Tareas clickables</h2>
        <ul>
            {tareas.map(t => 
                    <li key={t.id}>
                        <input 
                            type="checkbox"
                            checked = {t.realizada}
                            onChange={() => {cambiarTarea(t.id)}}/> {t.texto}
                        <button key={t.id} onClick={()=>{removeTarea(t.id)}}>Borrar</button>
                        <button key={t.id} onClick={() => {modificarTarea(t.id, nuevaTarea)}}>Modificar</button>
                    </li>)}
        </ul>
                    <input type="text" onChange={(e) => { setnuevaTarea(e.target.value)}} placeholder="Escribe una tarea"></input>
                    <button onClick= {() => {addTarea(nuevaTarea)}}>Agregar nueva tarea</button>
        </>
    )
};

export default ListasPractica;
