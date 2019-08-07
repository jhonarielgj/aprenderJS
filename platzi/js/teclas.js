document.addEventListener("keyup", dibujarTeclado);
const teclas = {
    left  : 37,
    up    : 38,
    right : 39,
    down  : 40
}; //como es un objeto si lleva ; después del }

let area = document.getElementById("areaDeDibujo");
let papel = area.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();  //iniciar la línea
    lienzo.strokeStyle = color; //color línea
    lienzo.moveTo(xInicial,yInicial);  //ubicarse para inciar
    lienzo.lineTo(xFinal,yFinal); //trazar la línea
    lienzo.stroke();  //terminar de dibujar
    lienzo.closePath(); //se muestra la línea
}

function dibujarTeclado(evento) {   //en esta variable queda todo el evento
//    console.log(evento.keyCode+" "+evento.key);
    let codigoTecla = evento.keyCode;
    //console.log(teclas.left);
    switch (codigoTecla) {  //solo para comparar iguales (==), no para mayor o menor
        case teclas.up:
                console.log("Arriba");
            break;
        case teclas.down:
            console.log("Abajo");
        break;
        case teclas.left:
            console.log("Izquierda");
        break;
        case teclas.right:
            console.log("Derecho");
        break;
        default:
            break;
    }

}

