// Variables globales --------------------------------------------------------------

let carrito = [];

const divRenderProductos = document.getElementById('productos');
const divRenderCarrito = document.getElementById('carrito'); 

const contadorCarrito = document.getElementById("contador");
const totalCarrito = document.getElementById("totalCarrito");

// Funciones -----------------------------------------------------------------------

/*
function obtenerProductos (){
    fetch('productos.json')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
*/

async function obtenerProductos(){
    const res = await fetch('productos.json')
    const data = await res.json()

    // const {productos} = data;
    renderProductos(data);
}


function renderProductos(array){
    array.forEach(producto => {
        // scripting - crea una carta para cada producto ---------------------------

        const divProducto = document.createElement('div');
        divProducto.classList.add('col');

        const divProducto2 = document.createElement('div');
        divProducto2.classList.add('card');
        divProducto2.classList.add('text-center');
        divProducto2.classList.add('border-dark');
        divProducto2.classList.add('h-100');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const divProducto3 = document.createElement('div');
        divProducto3.classList.add('card-body');

        const nombre = document.createElement('h5')
        nombre.classList.add('card-title');
        nombre.textContent = producto.nombre;

        const parrafo = document.createElement('p');
        parrafo.textContent = "$" + producto.precio;

        const btnAgregarAlCarrito = document.createElement('button')
        btnAgregarAlCarrito.setAttribute('id', 'boton'+ producto.id);
        btnAgregarAlCarrito.classList.add('btn')
        btnAgregarAlCarrito.classList.add('btn-primary')
        btnAgregarAlCarrito.textContent = "Agregar al carrito"

        divProducto.appendChild(divProducto2);
        divProducto2.appendChild(img);
        divProducto2.appendChild(divProducto3);
        divProducto3.appendChild(nombre);
        divProducto3.appendChild(parrafo);
        divProducto3.appendChild(btnAgregarAlCarrito);

        divRenderProductos.appendChild(divProducto)

        // agrega addEventListener a cada boton ------------------------------------

        let btn = document.getElementById(`boton${producto.id}`)

        btn.addEventListener('click',() => {
            agregarAlcarrito(producto.id)
        })

    })


    function agregarAlcarrito (id){
        // busca en el array de productos por id
        let item = array.find((producto) => producto.id == id) 
        
        // pushea el producto seleccionado al array carrito
        carrito.push(item); 
        
        // guarda el carrito en el localStorage
        localStorage.setItem('carritoLocal', JSON.stringify(carrito)); 
    
        // contador carrito
        contadorCarrito.innerText = carrito.reduce((acumulador, elemento) => {return acumulador + elemento.cantidad}, 0); 
    
        // libreria toastify , pop-up agregar al carro
        Toastify({ 
            text: "Producto agregado al carrito",
            className: "info",
            gravity: "bottom",
            duration: 700,
            style: {
                background: "linear-gradient(to right, #429f9e, #f05f3b)",
                color: "#000000",
            }
        }).showToast();
    
         // crea por innetHtml un div para cada elemento para que se muestre en la pagina en el sector carrito
        renderCarro();
    }

    function recuperarCarro (){
        // recupera el carrito guardado en el localStorage
        let recuperar = JSON.parse(localStorage.getItem('carritoLocal')) 
        
        /*
        if (recuperar){
            recuperar.forEach(el => {
                agregarAlcarrito(el.id)
            })
        }
        */
        
        // operador logico AND , es lo mismo que el if simple
        recuperar && recuperar.forEach(el => {agregarAlcarrito(el.id)}); 
    }

    recuperarCarro();

}

function renderCarro(){     
    // vacia el carrito
    divRenderCarrito.innerHTML = "" 
    
    // vacia el total
    totalCarrito.innerHTML = ""; 
    
    // desestructuracion en parametros
    carrito.forEach(({nombre, precio, cantidad}) => {
        divRenderCarrito.innerHTML += `
        <tr>
            <th scope="row">${cantidad}</th>
            <td>${nombre}</td>
            <td>$${precio}</td>
        </tr>
        `;
    });
}

function limpiarCarro(){
    // vacia el carrito
    divRenderCarrito.innerHTML = ""; 
    // vacia el contador 
    contadorCarrito.innerText = ""; 
    // vacia el total
    totalCarrito.innerHTML = ""; 
    // vacia el carrito
    carrito = [];
    // guarda el carrito en el localStorage, en este caso lo limpia
    localStorage.setItem('carritoLocal', JSON.stringify(carrito)); 
}


function totalCarro(){
    let suma = carrito.reduce((acumulador, elemento) => {return acumulador + elemento.precio}, 0); 
    
    // modal libreria sweet alert 2
    const swalWithBootstrapButtons = Swal.mixin({
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

obtenerProductos();
