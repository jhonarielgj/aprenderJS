window.onload = crearObjetos;

function crearObjetos() {
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      "<h1>Ejercicio práctico JAB #2</h1><div class='botones'><button class='boton'>Botón 1</button><button class='boton' id='boton2'>Botón 2</button><button class='boton'>Botón 3</button></div><div class='acciones'><img src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'></img></div>"
    );
  document.querySelectorAll(".boton")[0].onclick = accion0;
  document.querySelectorAll(".boton")[1].onclick = accion1;
  document.querySelectorAll(".boton")[2].onclick = accion2;
}

function accion0() {
  document.querySelector("img").style.transform = "rotate(15deg)";
  document.querySelector("img").style.background = "blue";
  document.querySelector("img").style.borderRadius = "50%";
  document.querySelectorAll(".boton")[0].style.visibility = "hidden";
}

function accion1() {
  let color = document.querySelectorAll(".boton")[1].style.backgroundColor;
  console.log("color: ", color);
  if (color === "blue") {
    document.querySelectorAll(".boton")[1].style.background = "red";
    document.querySelector("img").style.visibility = "visible";
  } else {
    document.querySelectorAll(".boton")[1].style.background = "blue";
    document.querySelector("img").style.visibility = "hidden";
  }
}

function accion2() {
  // Reseterar los estilos modificados en JS y usar los de estilos.css
  document.querySelector("img").style = null;
  document.querySelectorAll(".boton")[0].style = null;
  document.querySelectorAll(".boton")[1].style = null;
}
