document.addEventListener("keyup", dibujarTeclado);
const teclas = {
    left  : 37,
    up    : 38,
    right : 39,
    down  : 40
}; //como es un objeto si lleva ; después del }

let area = document.getElementById("areaDeDibujo");
let papel = area.getContext("2d");
let x = 150;
let y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(colorLinea, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();  //iniciar la línea
    lienzo.strokeStyle = colorLinea; //color línea
    lienzo.lineWidth = 3;  //grosor de la línea
    lienzo.moveTo(xInicial,yInicial); //ubicarse para inciar
    lienzo.lineTo(xFinal,yFinal); //trazar la línea
    lienzo.stroke(); //terminar de dibujar
    lienzo.closePath(); //se muestra la línea
}

function dibujarTeclado(evento) {   //en esta variable queda todo el evento
//    console.log(evento.keyCode+" "+evento.key);
    let codigoTecla = evento.keyCode;
    let color = "blue";
    let movimiento = 10;
    //console.log(teclas.left);
    switch (codigoTecla) {  //solo para comparar iguales (==), no para mayor o menor
        case teclas.up:
                dibujarLinea(color, x, y, x, y - movimiento, papel);
                y = y - movimiento;
                console.log("Arriba");
            break;
        case teclas.down:
                dibujarLinea(color, x, y, x, y + movimiento, papel);
                y = y + movimiento;
                console.log("Abajo");
            break;
        case teclas.left:
                dibujarLinea(color, x, y, x - movimiento, y, papel);
                x = x - movimiento;
                console.log("Izquierda");
            break;
        case teclas.right:
                dibujarLinea(color, x, y, x + movimiento, y, papel);
                x = x + movimiento;
                console.log("Derecho");
            break;
        default:
            break;
    }

}

