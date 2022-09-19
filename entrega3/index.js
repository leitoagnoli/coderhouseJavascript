class Producto{

    constructor(nombre,precio,promocion){
        this.nombre = nombre.toUpperCase();
        this.precio= precio;
        this.promocion = promocion
    }
  
    sumaIva()
  {
  this.precio= this.precio * 1.21
  }
  
  }
  
  let productos = []
  
  productos.push(new Producto("taladro", 5000,true))
  productos.push(new Producto("amoladora", 6000,false))
  productos.push(new Producto("destornillador", 500,false))
  productos.push(new Producto("sierra", 8000,true))
  productos.push(new Producto("gebe", 500,false))


let totalCarrito = 0

//MUESTRA LOS PRODUCTOS EN EL BODY
const ShowProducts = (products) => {
    const cardContainer = document.getElementById("card-container");


products.forEach(producto => {
    
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2 class="bg-blue">${producto.nombre}</h2>
    <p>precio: ${producto.precio}</p>
    <p>detalle</p>
    <button id="button${producto.nombre}">agregar producto</button>
    `;
    cardContainer.appendChild(contenedor);

    const button = document.getElementById(`button${producto.nombre}`);

    button.addEventListener('click', () => {
        alert(`Se agrego ${producto.nombre}`)
        totalCarrito =  totalCarrito+producto.precio

    });
  
  })
 
}

ShowProducts(productos)
console.log(totalCarrito)