/*
parseInt(número) => elimina decimales
Math => Objeto para operaciones matemáticas complejas
Math.ceil(número) => redondea hacia el entero más alto
Math.floor(número) => redondea hacia el entero más bajo
Math.random() => número aleatorio entre 0 y 1
*/

let vp = document.getElementById("villaPlatzi");
let papel = vp.getContext("2d");
let fondo = {
    url: "img/tile.png",
    cargaOk: false
}    
let cerdo = {
    url: "img/cerdo.png",
    cargaOk: false
}    
let pollo = {
    url: "img/pollo.png",
    cargaOk: false
}
let vaca = {
    url: "img/vaca.png",
    cargaOk: false
}


//INSERTAR UNA IMAGEN EN UN CAVNAS
fondo.imagen = new Image();  //buena práctica los nombres de clases empieza con mayúscula
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();  
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();  
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();  
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOk = true;
}

function cargarPollo() {
    pollo.cargaOk = true;
}

function cargarVaca() {
    vaca.cargaOk = true;
}

function dibujar() {
    if (fondo.cargaOk == true) {
        papel.drawImage(fondo, 0, 0);
    }
}

function aleatorio(min, max) {
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

