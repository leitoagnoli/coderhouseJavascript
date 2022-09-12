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

 console.log(productos)
let precioFinal=0;
  let productosCarrito = []
  let total = 0;
  let respuesta;
 

function saludar() {
    alert("bienvenidos , gracias por visitar nuestra pagina ");
    
}


  function mostrarMenu() {
    let option = prompt(`agregar productos al carrito:
              1: Taladro 5000$
              2: Amoladora 6000$
              3: Destornillador 500$
              4: Sierra 8000$
              5: Gebe 500$
              6: ver prodcutos con IVA
              7: Ver productos en promocion
              8: Salir
              `);
  
    switch (option) {
      case "1":
        alert(`Se agrego ${productos[0].nombre} al carrito`);
        total = total + productos[0].precio;
        productosCarrito.push(productos[0].nombre)
        respuesta = prompt("Desea comprar algo mas ? si o no");
          break;
        
      case "2":
        alert(`Se agrego ${productos[1].nombre} al carrito`);
        total = total + productos[1].precio;
        productosCarrito.push(productos[1].nombre)
        respuesta = prompt("Desea comprar algo mas ? si o no");
          break;
  
      case "3":
        alert(`Se agrego ${productos[2].nombre} al carrito`);
        total = total + productos[2].precio;
        productosCarrito.push(productos[2].nombre)
        respuesta = prompt("Desea comprar algo mas ? si o no");
          break;
  
      case "4":
        alert(`Se agrego ${productos[3].nombre} al carrito`);
        total = total + productos[3].precio;
        productosCarrito.push(productos[3].nombre)
        respuesta = prompt("Desea comprar algo mas ? si o no");
          break;
  
      case "5":
        alert(`Se agrego ${productos[4].nombre} al carrito`);
        total = total + productos[4].precio;
        productosCarrito.push(productos[4].nombre)
        respuesta = prompt("Desea comprar algo mas ? si o no");
          break;

  case "6":let precioIva=[]
  productos.forEach((producto) => {
    producto.precio = producto.precio  * 1.21
    precioIva.push(producto)
    document.write(JSON.stringify(producto))
  })
  alert(JSON.stringify(precioIva))
  respuesta = prompt("Desea comprar algo mas ? si o no");
  break;

  case "7":
    const productoPromo = productos.filter((producto)=>producto.promocion == true )
  alert(JSON.stringify(productoPromo))
  console.log(productoPromo)
  respuesta = prompt("Desea comprar algo mas ? si o no");
          break;

  case "8":
        alert("Gracias por su visita");
        break;

    }
  }
  saludar();
  mostrarMenu();
  while (respuesta == "si") {
    mostrarMenu()
  }
  
  
  alert(`El total de su compra es de ${total}`)
  //alert(`el total con iva es :${total * 1.21}`)
 if(productosCarrito.length!=0){
  alert(`Lista de Productos: ${productosCarrito}`)}
 
