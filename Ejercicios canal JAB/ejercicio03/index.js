window.onload = crearObjetos;
const MINOMBRE = "Jhon";
let boton = document.querySelector("#boton");

function crearObjetos() {
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      "<h1>Ejercicio práctico JAB #3</h1><div class='botones'><input type='text' id='cuadroTexto' /><button id='boton'>Botón</button></div><div class= 'acciones' /> "
    );
  document.querySelector("#boton").onclick = accion;
}

function accion() {
  let nombre = document.querySelector("#cuadroTexto").value;
  if (MINOMBRE.toLowerCase() == nombre.toLowerCase()) {
    document.querySelector(".acciones").innerHTML = `Hola ${nombre
      .substr(0, 1)
      .toUpperCase()}${nombre.substr(1, nombre.length).toLowerCase()}`;
    document
      .querySelector(".acciones")
      .insertAdjacentHTML(
        "beforeend",
        "<button id='botonWeb'>Enlace</button></div>"
      );
    document.querySelector("#botonWeb").onclick = enlace;
  } else {
    document.querySelector(".acciones").innerHTML = "";
    document.querySelector("#cuadroTexto").value = "";
    document.querySelector("#cuadroTexto").focus();
  }
}

function enlace() {
  location.href = "http://html6.es";
}
