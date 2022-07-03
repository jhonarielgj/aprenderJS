window.onload = crearObjetos;
let contador = 0;

function crearObjetos() {
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      "<h1>Ejercicio práctico JAB #4</h1><div class='botones'><input type='text' class='cuadroTexto' /> <h2>+</h2> <input type='text' class='cuadroTexto' /> <h2>=</h2> <input type = 'text' class = 'cuadroTexto' /> <button id='boton'>Comprobar</button></div> <div class='acciones' /> "
    );
  let boton = document.querySelector("#boton");
  let cuadrosDeTexto = document.querySelectorAll(".cuadroTexto");
  cuadrosDeTexto[0].value = Math.round(Math.random() * 100);
  cuadrosDeTexto[1].value = Math.round(Math.random() * 100);
  cuadrosDeTexto[2].focus();
  boton.onclick = accion;
  cuadrosDeTexto[2].addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      accion();
    }
  });
}

function accion() {
  let cuadrosDeTexto = document.querySelectorAll(".cuadroTexto");
  let divResultado = document.querySelector(".acciones");
  let total = Number(cuadrosDeTexto[0].value) + Number(cuadrosDeTexto[1].value);
  let valorUsuario = Number(cuadrosDeTexto[2].value);
  let regExp = /^([0-9])*$/;
  if (regExp.exec(cuadrosDeTexto[2].value) && cuadrosDeTexto[2].value !== "") {
    if (total === valorUsuario) {
      contador++;
      divResultado.innerHTML = `Muy bien, lleva una racha de ${contador} intentos. Hagamos otro!!!`;
      cuadrosDeTexto[0].value = Math.round(Math.random() * 100);
      cuadrosDeTexto[1].value = Math.round(Math.random() * 100);
      cuadrosDeTexto[2].value = "";
      cuadrosDeTexto[2].focus();
    } else {
      divResultado.innerHTML = "Intente nuevamente!";
      cuadrosDeTexto[2].value = "";
      cuadrosDeTexto[2].focus();
      contador = 0;
    }
  } else {
    divResultado.innerHTML = "Favor ingrese un valor válido (Números enteros)";
    cuadrosDeTexto[2].value = "";
    cuadrosDeTexto[2].focus();
  }
}
