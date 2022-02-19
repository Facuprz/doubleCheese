
// variables globales -------------------------------------------------------------------------------------------------------------------------

const productosElemento = document.getElementById("productos");
const carritoElemento = document.getElementById("carrito");
const total = document.getElementById("totalCarrito");

// Render productos - evento onclick ----------------------------------------------------------------------------------------------------------

function renderProductos(){
    /*
    productos.forEach((productos) => {
        productosElemento.innerHTML += `
        <div class="col">
            <div class="card text-center border-dark h-100">
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
    */
    productos.forEach(({id, nombre, precio, imagen}) => { // desestructuracion en parametros
        productosElemento.innerHTML += `
        <div class="col">
            <div class="card text-center border-dark h-100">
                <img src="${imagen}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p>$${precio}</p>
                    <a href="#" class="btn btn-primary" onclick="agregarAlcarrito(${id})">Agregar al carrito</a>
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
    localStorage.setItem('carritoLocal', JSON.stringify(carrito)); // guarda el carrito en el localStorage

    Toastify({ // libreria toastify , pop-up agregar al carro
        text: "Producto agregado al carro",
        className: "info",
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    renderCarro(); // esta funcion crea por innetHtml un div para cada elemento para que se muestre en la pagina en el sector carrito
}

// Recuperar carro del local Storage -----------------------------------------------------------------------------------------------------------

function recuperarCarro (){
    let recuperar = JSON.parse(localStorage.getItem('carritoLocal')) // recupera el carrito guardado en el localStorage
    
    /*
    if (recuperar){
        recuperar.forEach(el => {
            agregarAlcarrito(el.id)
        })
    }
    */

    recuperar && recuperar.forEach(el => {agregarAlcarrito(el.id)}); // operador logico AND , es lo mismo que el if simple
}

recuperarCarro();

// Render carro ------------------------------------------------------------------------------------------------------------------------------

function renderCarro(){     
    carritoElemento.innerHTML = "" // vacia el carrito
    total.innerHTML = ""; // vacia el total
    
    /*
    carrito.forEach((item) => {
        carritoElemento.innerHTML += `
            <div class="itemCarro">    
                <div>
                    <h4>Producto: ${item.nombre} $${item.precio}</h4>
                </div>
            </div>
        `;
    });
    */
    
    carrito.forEach(({nombre, precio}) => { // desestructuracion en parametros
        carritoElemento.innerHTML += `
            <div class="itemCarro">    
                <div>
                    <h4>Producto: ${nombre} $${precio}</h4>
                </div>
            </div>
        `;
    });
}

// Total carro -------------------------------------------------------------------------------------------------------------------------------

function totalCarro(id){
    let suma = carrito.reduce((acumulador, elemento) => {return acumulador + elemento.precio}, 0); 
    /*
    total.innerHTML = `
        <h4>Gracias por su compra!</h4>
        <h4 id="numeroTotal">
            <b>El total es de: $ ${suma}</b>
        </h4>
    `;
    */
    
    const swalWithBootstrapButtons = Swal.mixin({  // modal libreria sweet alert 2
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Confimar compra?',
        text: `El total es de: $${suma}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar ahora!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            'Gracias por su compra!',
            'Su pedido esta siendo preparado.',
            'success'
        )
        limpiarCarro();
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Pedido cancelado',
            'Esperamos verlo pronto :)',
            'error'
        )
        limpiarCarro();
        }
    })
}

// Limpiar carro -------------------------------------------------------------------------------------------------------------------------------

function limpiarCarro(){
    carritoElemento.innerHTML = "" // vacia el carrito
    total.innerHTML = ""; // vacia el total
    carrito = [] // vacia el carrito
    localStorage.setItem('carritoLocal', JSON.stringify(carrito)); // guarda el carrito en el localStorage, en este caso lo limpia
}

