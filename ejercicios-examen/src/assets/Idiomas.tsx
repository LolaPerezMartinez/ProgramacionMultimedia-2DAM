import { useState, type JSX } from "react";

type Idiomas = 'es' | 'en' ;

type Traducciones = {
    [key in Idiomas] : {
        titulo: string,
        seleccion: string,
        bienvenida: string,
        descripcion: string,
    }
}

function CambiarIdioma (): JSX.Element {
    const [idioma, setIdioma] = useState<Idiomas>('es');

    const traducciones : Traducciones = {
        es :{
            titulo: 'Bienvenido',
            seleccion: 'Selecciona un lenguaje',
            bienvenida: 'Bienvenido/a',
            descripcion: 'Estamos en un cambio de idiomas'

        },
        en: {
            titulo: 'Language Selector',
            seleccion: 'Select a language:',
            bienvenida: 'Welcome!',
            descripcion: 'This is an example of language switching in React'
        }
    }

    const texto = traducciones[idioma];
    return <>
        <h1>{texto.bienvenida}</h1>
        <h2>{texto.seleccion}</h2>
        <button onClick={() => setIdioma('es')}>Español</button>
        <button onClick={() => setIdioma('en')}>English</button>
        <h2>{texto.bienvenida}</h2>
        <h3>{texto.descripcion}</h3>

    </>
}

export default CambiarIdioma;