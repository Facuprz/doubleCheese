// Carro de compras

// Stock de productos

let stock = [
    {id: 0, producto: "Hamburgesa", precio: 900, stock: 10 },
    {id: 1, producto: "Lomito", precio: 850, stock: 5 },
    {id: 2, producto: "Pizza", precio: 600, stock: 7},
    {id: 3, producto: "Pancho", precio: 300, stock: 2}
]

// Carro

let carro = [];

// Agregar al carro

function agregarCarro(id){
    const productoSeleccionado = stock.find((producto) => producto.id == id);
    carro.push(productoSeleccionado);

    actualizarCarro();
} 

// Actualizar carro

function actualizarCarro(){
    let total = carro.reduce((acc, el) => acc + el.precio, 0);
    alert("El total es: " + total);
}

// Cambiar numero de unidades



// Prueba

agregarCarro(2);