class Producto{

    constructor(nombre,precio,promocion,img){
        this.nombre = nombre.toUpperCase();
        this.precio= precio;
        this.promocion = promocion;
        this.img=img;
    }
  
    sumaIva()
  {
  this.precio= this.precio * 1.21
  }
  
  }

  let productos = []
  
  productos.push(new Producto("taladro", 5000,true,"https://www.ferreteriahidromat.com/ar/wp-content/uploads/2018/07/taladro-dewalt-dwd014.jpg"))
  productos.push(new Producto("amoladora", 6000,false,"https://www.pelba.com.ar/wp-content/uploads/2022/03/AMOLADORA.jpg"))
  productos.push(new Producto("destornillador", 500,false))
  productos.push(new Producto("sierra", 8000,true))
  productos.push(new Producto("gebe", 500,false))

let carrito= []
let totalCarrito = 0

//MUESTRA LOS PRODUCTOS EN EL BODY
const ShowProducts = (products) => {
    const cardContainer = document.getElementById("card-container");


products.forEach(producto => {
    
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="card"  style="width:18rem;">
    <h2 class="bg-blue">${producto.nombre}</h2>
    <img src="${producto.img}" class ="card-img" alt="">
    <div class="card-body">
    <p>precio: ${producto.precio}</p>
    <p>detalle</p>
   
    <button id="button${producto.nombre}">agregar producto</button>
    </div>
    </div>
    
     `
    cardContainer.appendChild(contenedor);

    const button = document.getElementById(`button${producto.nombre}`);

    button.addEventListener('click', () => {
        alert(`Se agrego ${producto.nombre}`)
        totalCarrito =  totalCarrito+producto.precio
        carrito.push(producto.nombre)
        const total =document.getElementById("total")
        total.innerHTML= `:el total de compra :${totalCarrito}`
    });
  
  })
 
}


ShowProducts(productos)


                




//BOTON COMPRAR
const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Comprar';
document.body.appendChild(button);
button.addEventListener('click', () => {
const compraCarrito = {
  total: totalCarrito,
  productos: carrito
}
//GUARDA COMPRA EN EL LOCAL STORAGE
localStorage.setItem("compra",JSON.stringify(compraCarrito))
  alert(`El total es: ${totalCarrito}:  ${carrito}`)})


//BOTON VACIAR CARRITO
  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.innerText = 'Vaciar Carrito';
  document.body.appendChild(button2);
  button2.addEventListener('click', () => {
    totalCarrito = 0
    carrito=[]
    const total =document.getElementById("total")
    total.innerHTML= `:el total de compra :${totalCarrito}`
    alert(`Se vacio el carrito, el total es: ${totalCarrito}`)})