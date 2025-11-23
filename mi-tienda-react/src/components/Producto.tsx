
type Producto = {
    nombre: String
    precio: number
    disponible: boolean
}

function MostrarProducto({nombre, precio, disponible}: Producto){
    return  <div className="productos" style={{border: `2px solid ${disponible ? "green" : "red"}`}}>
                <h3>{nombre}</h3>
                <p>{precio} €</p>
                <p>{disponible ? "🟢En stock": "🔴Agotado"}</p>

            </div>;

}

export default MostrarProducto;