// Carrito de compras - Primer entrega proyecto final JS

// class Producto{
//     constructor(id, nombre, precio){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const producto5 = new Producto(5, 'Docena de Empanadas', 750);

let stockProductos = [
    {id: 1, nombre: "Hamburgesa", precio: 990},
    {id: 2, nombre: "Lomito", precio: 800},
    {id: 3, nombre: "Pizza", precio: 850},
    {id: 4, nombre: "Pancho", precio: 500},
]

// const carro = [];

// let entrada = 0;

// function hacerPedido(){
//     do{
//         entrada = parseInt(prompt("Ingrese numero de combo y luego ingrese 0 para terminar el pedido"));
//         carro.push(stockProductos[entrada - 1]);
//     }
//     while (entrada != 0) {
//         carro.pop();
//         mostrarCarro();
//         totalCarro();
//     }
// }

// function mostrarCarro(){
//     let renderCarro = '';
//     carro.forEach(element => {
//         renderCarro += `
//             Combo N: ${element.id}
//             Nombre: ${element.nombre} 
//             Precio: $${element.precio}
//             `;
//     });
//     const carrito = document.getElementById('carrito');
//     // carrito.innerHTML = "Gracias por su pedido" + renderCarro;
//     // carrito.innerHTML += `Gracias por su pedido:  ${renderCarro}`;
//     const parrafoPedido = document.createElement("p");
//     parrafoPedido.innerHTML += `Gracias por su pedido:  ${renderCarro}`;
//     carrito.appendChild(parrafoPedido);
// }

// function totalCarro(){
//     let suma = carro.reduce((acumulador, elemento) => {return acumulador + elemento.precio}, 0);
//     const totalCarrito = document.getElementById('carrito');
//     const parrafoTotal = document.createElement("p");
//     // alert("El total es de: $" + suma);
//     parrafoTotal.innerHTML += `El total es de: $ ${suma}`;
//     totalCarrito.appendChild(parrafoTotal);
// }

//

let carro2 = [];

function agregarAlCarrito(id){
    const item = stockProductos.find((producto) => producto.id == id)
    carro2.push (item);
    console.log (carro2);
}

let botonAgregarAlCarrito = document.getElementsByClassName('btn-primary');
console.log(botonAgregarAlCarrito);