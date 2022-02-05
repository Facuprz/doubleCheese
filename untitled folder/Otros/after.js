// Ejemplo carrito de compras

class Producto {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio =  precio;
    }
}

const producto1 = new Producto (1, "javascript", 15000);
const producto2 = new Producto (2, "react", 20000);
const producto3 = new Producto (3, "angular", 23000);
const producto4 = new Producto (4, "node js", 30000);

const baseDeDatos = [producto1, producto2, producto3, producto4];

function renderCursos(){
    baseDeDatos.forEach((elemento) => {document.write(`${elemento.nombre}`)});
}

const carro = [];

function comprar (){
    carro.push(baseDeDatos[0]);
}

function ordenarPrecio(){
    baseDeDatos.sort((a, b) => {return a.precio - b.precio}); // ordena de menor a mayor
}


const idHasta5 = baseDeDatos.filter((curso => curso.id <= 5));
console.log(idHasta5);

function sortArrays(a, b){
    if(a.nombre < b.nombre){
        return -1;
    }
    if(a.nombre > b.nombre){
        return 1;
    }
    return 0;
}

const alfa = baseDeDatos.sort(sortArrays);
console.log(alfa);