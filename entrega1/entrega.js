let productos = [
  { nombre: "taladro", precio: 5000 },
  { nombre: "amoladora", precio: 6000 },
  { nombre: "destornillador", precio: 500 },
  { nombre: "sierra", precio: 8000 },
  { nombre: "gebe", precio: 500 },
];

let productosCarrito = []
let total = 0;
let respuesta;

function mostrarMenu() {
  let option = prompt(`agregar productos al carrito:
            1: Taladro 5000$
            2: Amoladora 6000$
            3: Destornillador 500$
            4: Sierra 8000$
            5: Gebe 500$
            6: Salir
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

    case "6":
      alert("Gracias por su visita");
      break;
  }
}

mostrarMenu();
while (respuesta == "si") {
  mostrarMenu()
}


alert(`El total de su compra es de ${total}`)
alert(`Lista de Productos: ${productosCarrito}`)
