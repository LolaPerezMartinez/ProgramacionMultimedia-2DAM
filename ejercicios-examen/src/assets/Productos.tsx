import { useState, type JSX } from "react";

type Producto ={
    id: number,
    nombre: string,
    precio: number,
    stock: number
}

function FiltrarProductos () : JSX.Element{
    const [listaProductos] = useState<Producto[]>([
            {id: 1, nombre: 'Laptop HP', precio: 899.99, stock: 5},
            {id: 2, nombre: 'Mouse logitech', precio: 25.50, stock: 0}

    ]);

    


    function enStock (listaProductos: Producto[]) {
        const productosStock: Producto[] = listaProductos.filter((p: Producto) => p.stock > 0);
           return productosStock;
    }


    return <>
    <h1>Filtro de Productos</h1>
    <input type="checkbox" 
            onChange={e=> e.target}/>Mostrar solo en stock
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
        </tr>
        {listaProductos.map(
            (producto: Producto) => (
                <>
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}€</td>
                    <td>{producto.stock}</td>

                </tr>
                </>
            )
        )}
        
    </table>
    </>
}

export default FiltrarProductos