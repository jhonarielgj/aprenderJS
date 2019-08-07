let direccion = window.location;
document.write("Estás en " + direccion);
//console.log(direccion);
//Otra forma de ubicar mejor el texto
let dir = document.getElementById("direccion");
dir.innerHTML = "Estás en " + direccion;
let dir2 = document.getElementsByTagName("div");
dir2[1].innerHTML = "Estás en " + direccion;
//console.log(dir2);
navegador = document.body;  //windows navigator otros elementos
//console.log(navegador);

//-----TRABAJO CON CANVAS
let textoLineas = document.getElementById("txtLineas");
let boton = document.getElementById("btnLineas");
boton.addEventListener("click", dibujoPorClick);
let d = document.getElementById("dibujo");
var anchoCanvas = d.width;
console.log(anchoCanvas);
let lienzo = d.getContext("2d");
//console.log(lienzo);
//lienzo.fillRect(0, 0, 150, 75); rectángulos en canvas
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();  //iniciar la línea
    lienzo.strokeStyle = color; //color línea
    lienzo.moveTo(xInicial,yInicial);  //ubicarse para inciar
    lienzo.lineTo(xFinal,yFinal); //trazar la línea
    lienzo.stroke();  //terminar de dibujar
    lienzo.closePath(); //se muestra la línea
}

    lienzo.fillStyle = "rgb(200, 0, 0, 0.7)"; //define color y transparencia(opcional)
    lienzo.fillRect (100, 100, 55, 50); //dibuja un rectángulo relleno
    lienzo.fillStyle = "rgba(0, 0, 200, 0.5)";
    lienzo.fillRect (130, 130, 55, 50);
    lienzo.clearRect(130,130,15,15);

//Otras figuras
/*
beginPath()
    Crea un nuevo trazo. Una vez creado, los comandos de dibujo futuros son aplicados dentro 
    del trazo y usados para construir el nuevo trazo hacia arriba.
closePath()
    Cierra el trazo de tal forma que los comandos de dibujo futuros son, una vez más 
    redireccionados al contexto.
stroke()
    Dibuja el contorno de la forma.
fillRect(x, y, width, height)
    Dibuja un rectángulo relleno.
strokeRect(x, y, width, height)
    Dibuja el contorno de un rectángulo.
clearRect(x, y, width, height)
    Borra un área rectangular especificada, dejándola totalmente transparente. 
fill();
    Dibuja una forma solida rellenando el área del trazo.
moveTo(x, y)
    Mueve la pluma a las coordenadas específicadas por x e y. 
lineTo(x, y)
    Dibuja una línea desde la posición actual del dibujo a la posición específicada por x e y. 
arc(x, y, radius, startAngle, endAngle, anticlockwise)
    Dibuja un arco. 
quadraticCurveTo(cp1x, cp1y, x, y)
    Dibuja una curva cuadrática de Bézier desde la posición actual de la pluma hasta el punto 
    final especificado por x e y, utilizando el punto de control especificado por cp1x y cp1y.
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    Dibuja una curva cúbica de Bézier desde la posición actual de la pluma hasta el punto 
    final especificado por x e y, utilizando los puntos de control especificados 
    por (cp1x, cp1y) y (cp2x, cp2y). 
*/

function dibujoPorClick() {
    let lineas = parseInt(textoLineas.value);
    let espacio = parseInt(anchoCanvas/lineas);
    if (espacio < 1) {espacio = 1;}
    let l = 0;
    let enX, enY = 0;

    while (l < lineas) {
        enX = (l + 1) * espacio;
        enY = l * espacio;
        dibujarLinea("blue",0,enY,enX,300);    
        l += 1;
    }
    
    l = 0;
    /*while (l < lineas) {
        enY = 300 - l * espacio;
        enX = 300 - ((l + 1) * espacio);
     //   console.log("x="+enX+"y="+enY);
        dibujarLinea("red",enX,0,300,enY);    
        l++;
    }*/
    do {
        enX = 300 - ((l + 1) * espacio);
        enY = 300 - l * espacio;
     //   console.log("x="+enX+"y="+enY);
        dibujarLinea("red",enX,0,300,enY);    
        l++;    
    } while (l < lineas);
    
    /*l = 0;
    while (l < lineas) {
        enX = l * espacio;
        enY = 300 - ((l + 1) * espacio);
        console.log("x="+enX+"y="+enY);
        dibujarLinea("green",enX,300,300,enY);    
        l = l + 1;
    }*/
    
    //lo mismo usando for
    for (let l = 0; l < lineas; l++) {
        enX = l * espacio;
        enY = 300 - ((l + 1) * espacio);
     //   console.log("x="+enX+"y="+enY);
        dibujarLinea("green",enX,300,300,enY);        
    }
    
    l = 0;
    while (l < lineas) {
        enX = 300 - ((l + 1) * espacio);
        enY = l * espacio;
        console.log("x="+enX+"y="+enY);
        dibujarLinea("orange",0,enY,enX,0);    
        l = l + 1;
    }
    
    //lo mismo usando for
    /*for (let l = 0; l < lineas; l++) {
        enX = 300 - ((l + 1) * espacio);
        enY = l * espacio;
    //    console.log("x="+enX+"y="+enY);
        dibujarLinea("orange",0,enY,enX,0);    
    }*/
    
}
