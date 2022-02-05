/* class Producto {

    constructor(id, nombre, precio){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    iva(){
        return this.precio * 1.21
    }
}

const producto1 = new Producto(1, 'Javascript', 15000);
const producto2 = new Producto(2, 'React JS', 10000);
const producto3 = new Producto(3, 'Angular', 23000);
const producto4 = new Producto(4, 'Node JS', 30000);
const producto5 = new Producto(5, 'Java', 15000);
const producto6 = new Producto(6, 'Python', 20000);
const producto7 = new Producto(7, 'C#', 23000);
const producto8 = new Producto(8, 'C++', 30000);

const BBDD = [
    producto1, 
    producto2, 
    producto3, 
    producto4,
    producto5,
    producto6,
    producto7,
    producto8
]

const CARRITO = []
console.log(BBDD)
function renderizarCursos(){

    BBDD.forEach((el)=>{
        
        document.write(`
        <br>
        ${el.nombre} <button onclick="comprar()">Comprar</button>
        <br>
        <br>`)

    })
    document.write(`
    <button onclick="ordenarPrecio()">Ordenar</button><br>
    <button onclick="hastaCinco()">Mostrame los primeros 5</button`)
}

function comprar(){

    CARRITO.push(BBDD[0])
}

function ordenarPrecio(){

    BBDD.sort((a,b)=>{
        return a.precio - b.precio
    })
    
}


function hastaCinco(){

    const idHastaCinco = BBDD.filter((curso)=> curso.id <= 5);
    console.log(idHastaCinco);
}

function sortArrays(a,b){

    if(a.nombre < b.nombre) {
        return -1;
    }
    if(a.nombre > b.nombre) {
        return 1;
    }
    return 0;
}

const alfa = BBDD.sort(sortArrays)
console.log(alfa); */


let modelosAutos =
    [
        {
            id: 1, 
            modelo: "Toyota Etios", 
            version: "X MT", 
            precio: 1771000
        },
        {
            id: 2,
            modelo: "FIAT MOBI",
            version: "LIKE", 
            precio: 1879000},
        {
            id: 3,
            modelo: "Fiat Argo",
            version: "Drive 1.3", 
            precio: 2300000},
        {
            id: 4,
            modelo: "Nissan Versa V-Drive",
            version: "Plus AT", 
            precio: 2380000},
        {
            id: 5,
            modelo: "Peugeot 208",
            version: "Like 1.6 MT", 
            precio: 2410000}
    ]



let render = '';
modelosAutos.forEach(element => {
    render += `
        AUTO NUMERO: ${element.id}
        MODELO: " + ${element.modelo}
        VERSION: "+ ${element.version} 
        PRECIO: " + ${element.precio}`;

})
console.log(render)


function mostrarAutos(){

    alert(`
    ${render}
        
    `)
}
mostrarAutos()