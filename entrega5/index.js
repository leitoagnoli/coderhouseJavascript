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
  
  productos.push(new Producto("taladro", 5000,true,"IMG/TALADRO.jpg"))
  productos.push(new Producto("amoladora", 6000,false,"IMG/amoladora.jpg"))
  productos.push(new Producto("destornillador", 500,false,"IMG/destornilladores.jpg"))
  productos.push(new Producto("sierra", 8000,true,"IMG/sierra.jpg"))
  productos.push(new Producto("pinza", 500,false,"IMG/pinza.jpg"))
  productos.push(new Producto("tornillos",1000,true,"IMG/tornillos.jpg"))
let carrito= []
let totalCarrito = 0

//MUESTRA LOS PRODUCTOS EN EL BODY
const ShowProducts = (products) => {
    const cardContainer = document.getElementById("card-container");


products.forEach(producto => {
    
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="card "  style="width:18rem;">
    <h2 class="bg-blue">${producto.nombre}</h2>
    <img src="${producto.img}" class ="card-img" alt="">
    <div class="card-body">
    <p>precio: ${producto.precio}</p>
    <p>Detalle</p>
   
    <button class="boton" id="button${producto.nombre}">agregar producto</button>
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
 // alert(`El total es: ${totalCarrito}:  ${carrito}`)})
swal({
  title:`Compra exitosa`,
  text: `El total es: ${totalCarrito}:  ${carrito}`,
  icon: 'success'
})
})

//BOTON VACIAR CARRITO
  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.innerText = 'Vaciar Carrito';
  document.body.appendChild(button2);
  button2.addEventListener('click', () => {
    if(carrito.length===0){
      swal({
        title:`Su carrito esta vacio`,
        text: `todavia no sumo productos al carrito`,
        icon: 'info'
      })
     
    } else{ 
    totalCarrito = 0
    carrito=[]
    const total =document.getElementById("total")
    total.innerHTML= `el total de compra :${totalCarrito}`
    // USO DE && OPERARDOR AVANZADO
    carrito.length===0 && alert(`Se vacio el carrito, el total es: ${totalCarrito}`)}})
   
const button3 = document.createElement('button');
button3.type = 'button';
button3.innerText = 'Mostrar ultima compra';
document.body.appendChild(button3);
button3.addEventListener('click', () => {
  // inicializacion condicional de variable con ||
  const carrito = JSON.parse(localStorage.getItem('compra')) || []
  //desustructuracion de objeto
let{total,productos} = carrito
  alert(`Su ultima compra es :  ${total} ${productos}`)
// swall((`Su ultima compra es :  ${total} ${productos}`))
})

