window.onload = crearObjetos;

function crearObjetos() {
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      "<h1>Ejercicio práctico JAB #4</h1><div class='botones'><input type='text' class='cuadroTexto' /> <h2>+</h2> <input type='text' class='cuadroTexto' /> <h2>=</h2> <input type = 'text' class = 'cuadroTexto' /> <button id='boton'>Comprobar</button></div > <div class='acciones' /> "
    );
  let boton = document.querySelector("#boton");
  let cuadrosDeTexto = document.querySelectorAll(".cuadroTexto");
  console.log("cuadrosDeTecto: ", cuadrosDeTexto[0].innerHTML);
  boton.onclick = accion(cuadrosDeTexto);
}

function accion(cuadrosDeTexto) {
  console.log("Click");
  console.log("cuadrosDeTexto: ", cuadrosDeTexto[0].innerHTML);
}
