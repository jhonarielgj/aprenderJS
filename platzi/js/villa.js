/*
parseInt(número) => elimina decimales
Math => Objeto para operaciones matemáticas complejas
Math.ceil(número) => redondea hacia el entero más alto
Math.floor(número) => redondea hacia el entero más bajo
Math.random() => número aleatorio entre 0 y 1
*/

let vp = document.getElementById("villaPlatzi");
let papel = vp.getContext("2d");
let numVacas  = aleatorio(0, 40);
let numCerdos = aleatorio(0, 2);
let numPollos = aleatorio(0, 6);

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
    dibujar();
}

function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        for (let v = 0; v < numVacas; v++) {
            let x = aleatorio(0, 7);
            x = x * 60; //genera columnas para ubicar las vacas
            let y = aleatorio(0, 7);
            y = y * 60; //genera filas para ubicas las vacas y formar una grilla
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOk) {
        for (let v = 0; v < numCerdos; v++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
        papel.drawImage(cerdo.imagen, 100, 100);
    }
    if (pollo.cargaOk) {
        for (let v = 0; v < numPollos; v++) {
            let x = aleatorio(0, 420);
            let y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, max) {
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

