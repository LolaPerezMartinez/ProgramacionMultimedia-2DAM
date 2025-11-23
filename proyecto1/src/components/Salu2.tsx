//type sirve para poner el tipo de los datos que vamos a ponerle a las propiedades
type Salu2Props = {
    nombre: string
    edad: number
}

function Salu2({nombre, edad}: Salu2Props){
    return <div>{nombre} tiene {edad} años</div>
}

export default Salu2;