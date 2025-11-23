import { useState, type JSX } from "react";

type Idioma = 'es' | 'en';

type Traducciones = {
    [key in Idioma]:{
        titulo: string,
        seleccion: string,
        bienvenida: string,
        descripcion: string
    }
}

function CambiarIdioma(): JSX.Element{
    const [idioma, setIdioma] = useState<Idioma>('es');

    const traducciones : Traducciones ={
        'es' :{
            titulo: 'Titulo en español',
            seleccion: 'Selecciona en español',
            bienvenida: 'Bienvenida en español',
            descripcion: 'Descripcion en español'
        },
        'en' :{
            titulo: 'Titulo en ingles',
            seleccion: 'Selecciona en ingles',
            bienvenida: 'Bienvenida en ingles',
            descripcion: 'Descripcion en ingles'
        }
    }

    const botones = [
        {code: 'es', idioma: 'Español'},
        {code: 'en', idioma: 'English'}
    ]

    
    

    return(
        <div>
            <h1>{traducciones[idioma].titulo}</h1>
            <h2>{traducciones[idioma].seleccion}</h2>

            <div>
                {botones.map((boton)=>
                (
                    <button key={boton.code} onClick={() =>setIdioma(boton.code as Idioma)}>{boton.idioma}</button>
                )
                                )}

            </div>

            <button onClick={() => setIdioma('es')} style={{backgroundColor : idioma === 'es' ? 'blue' : 'grey'}}>Español</button>
            <button onClick={() => setIdioma('en')} style={{backgroundColor : idioma === 'en' ? 'blue' : 'grey'}}>English</button>

           <h2>{traducciones[idioma].bienvenida}</h2>
           <h3>{traducciones[idioma].descripcion}</h3>



        </div>
    )
}

export default CambiarIdioma;