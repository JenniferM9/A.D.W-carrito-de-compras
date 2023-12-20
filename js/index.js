const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto"
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Artículo 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar</button>`
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(bicicletas);