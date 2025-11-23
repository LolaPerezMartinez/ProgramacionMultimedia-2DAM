
type Tienda = {
    nombreTienda: String
    sloganTienda: String
}

function MostrarTitulo({nombreTienda, sloganTienda}: Tienda){
    return <section>
            <h1>{nombreTienda}</h1>
            <h2>{sloganTienda}</h2>
           </section>
}


export default MostrarTitulo;