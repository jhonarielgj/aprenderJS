//Propiedades y métodos del BOM
//Window
//Propiedades
window.name = "Nombre de la ventana";
let nombre = "El nombre es: " +  window.name + "<br>";
let ancho = "El ancho es: " +  window.outerWidth + "<br>";
let alto = "El alto es: " +  window.outerHeight + "<br>";
let anchoInterno = "El ancho interno es: " +  window.innerWidth + "<br>";
let altoInterno = "El alto interno es: " +  window.innerHeight + "<br>";
let scrollHorizontal = "El scroll horizontal es: " +  window.pageXOffset + "<br>";
let scrollVertical = "El scroll vertical es: " +  window.pageYOffset + "<br>";
let distanciaIzquierda = "La distancia de la ventana desde la izquierda es: " +  window.screenX + "<br>";
let distanciaSuperior = "La distancia de la ventana desde arriba es: " +  window.screenY + "<br>";

document.write(nombre, ancho, alto, anchoInterno, altoInterno, 
        scrollHorizontal, scrollVertical, distanciaIzquierda, 
        distanciaSuperior);
//Windos Métodos
window.alert("Hola");
function visitar(){
        ventana = window.open("http://google.com", "_blank", "width=500, height=300");
 //       ventana.resizeBy(300,300);
}
function cerrar(){
        ventana.close();
}
function aumentar(){ //VERIFICAR PORQUÉ NO FUNCIONARON
        ventana.resizeBy(200,200); //aumenta el tamaño 
        ventana.resizeTo(100,100); //define el tamaño
        ventana.moveBy(50,50); //mover la ventana
        ventana.moveTo(500, 100); //ubica en la posición
        ventana.focus(); //traer al frente la ventana
        ventana.print(); //imprimir la ventana
}

//window.history
let historial = window.history;
console.log(historial);
//location devuelve la url
let localizacion = window.location;
document.write(localizacion);
//navigator
let navegador = window.navigator.vendor;
document.write(navegador);
console.log(window.navigator);

let pantalla = window.screen;
console.log(pantalla);