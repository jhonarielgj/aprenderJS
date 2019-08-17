//Ventana abierta en el navegador
//Todos los objetos pertenecen al objeto window

//PROPIEDADES
window.name = "Mi ventana";
let texto = "";

texto += `Nombre: ${window.name}
    <br>Ancho completo (incluye scroll) de la ventana: ${window.outerWidth}
    <br>Alto completo (incluye barra herramientas): ${window.outerHeight}
    <br>Ancho interno de la ventana: ${window.innerWidth}
    <br>Alto interno de la ventana: ${window.innerHeight}
    <br>Scroll vertical de la ventana: ${window.pageYOffset}
    <br>Scroll horizonal de la ventana: ${window.pageXOffset}
    <br>Distancia desde la izquierda de la ventana: ${window.screenX}
    <br>Distancia desde la arriba de la ventana: ${window.screenY}
    `;
    console.log('window.navigator: ', window.navigator);
    console.log('window.screen: ', window.screen);
    console.log('window.history: ', window.history);
    console.log('window.navigator: ', window.navigator);

document.getElementById("ventana").innerHTML = texto;
document.getElementById("abrir").addEventListener("click", crearVentana);
document.getElementById("cerrar").addEventListener("click", cerrarVentana);
document.getElementById("imprimir").addEventListener("click", imprimir);

let miVentana;
function crearVentana() {
    miVentana = window.open("", "width=300,height=300",
    "toolbar=0,scrollbars=0,location=0,titlebar=0,resizable=no,menubar=0,status=0,top=200,left=500,width=400,height=300");
    console.log('miVentana: ', miVentana);
    miVentana.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>"); 
};

function cerrarVentana() {
    miVentana.close();
}

function redimensionarVentana() {
    miVentana.resizeBy(10,10); //en pixeles
    //Otras parecidas es resizeTo(#pix,#pix) - moveBy(#pix,#pix) - moveTo(#pix,#pix) - 
    //scrollBy(#pix,#pix) - scrollTo(#pix,#pix) - focus() foco a la ventana - print() imprimir
    //stop() detiene la carga de una página
}

function imprimir() {
    miVentana.print();
}
