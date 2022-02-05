// Array productos ---------------------------------------------------------------------------------------------------------------------------

let productos = [
    {id: 0, nombre: "Hamburgesa", precio: 990, imagen:"/images/hamburgesa.jpeg"},
    {id: 1, nombre: "Lomito", precio: 800, imagen:"/images/lomito.jpeg"},
    {id: 2, nombre: "Pizza", precio: 850, imagen:"/images/pizza.jpeg"},
    {id: 3, nombre: "Pancho", precio: 500, imagen:"/images/pancho.webp"},
]

// variables globales -------------------------------------------------------------------------------------------------------------------------

const productosElemento = document.getElementById("productos");
const carritoElemento = document.getElementById("carrito");
const total = document.getElementById("totalCarrito");

// Render productos - evento onclick ----------------------------------------------------------------------------------------------------------

function renderProductos(){
    productos.forEach((productos) => {
        productosElemento.innerHTML += `
        <div class="col">
            <div class="card text-center h-100">
                <img src="${productos.imagen}" class="card-img-top" alt="${productos.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p>$${productos.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="agregarAlcarrito(${productos.id})">Agregar al carrito</a>
                </div>
            </div>
        </div>
        `;
    });
}

renderProductos(); // crea una carta para cada producto encontrado en el array de productos

// Agregar al carro --------------------------------------------------------------------------------------------------------------------------

let carrito = []; // array para guardar los productos seleccionados

function agregarAlcarrito(id){
    let item = productos.find((producto) => producto.id == id) // busca en el array de productos por id
    carrito.push(item); // pushea el producto seleccionado al array carrito
    renderCarro(); // esta funcion crea por innetHtml un div para cada elemento para que se muestre en la pagina en el sector carrito
}

// Render carro ------------------------------------------------------------------------------------------------------------------------------

function renderCarro(){
    carritoElemento.innerHTML = "" // vacia el carrito
    total.innerHTML = ""; // vacia el total
    carrito.forEach((item) => {
        carritoElemento.innerHTML += `
            <div class="itemCarro">    
                <div>
                    <h4>Producto: ${item.nombre} $${item.precio}</h4>
                </div>
            </div>
        `;
    });
}

// Total carro -------------------------------------------------------------------------------------------------------------------------------

function totalCarro(id){
    let suma = carrito.reduce((acumulador, elemento) => {return acumulador + elemento.precio}, 0);
    total.innerHTML = `
        <h4>Gracias por su compra!</h4>
        <h4 id="numeroTotal">
            <b>El total es de: $ ${suma}</b>
        </h4>
    `;
}

// Limpiar carro -------------------------------------------------------------------------------------------------------------------------------

function limpiarCarro(){
    carritoElemento.innerHTML = "" // vacia el carrito
    total.innerHTML = ""; // vacia el total
    carrito = [] // vacia el carrito
}