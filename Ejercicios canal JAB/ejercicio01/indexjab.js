window.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].onclick = accion1;
  document.querySelectorAll(".boton")[1].onclick = accion2;
  document.querySelectorAll(".boton")[2].onclick = accion3;
  document.querySelectorAll(".boton")[3].onclick = accion4;
}

function accion1() {
  document.querySelector(".acciones").innerHTML = "Hola Mundo";
}

function accion2() {
  document.querySelector(".acciones").innerHTML =
    "<img src='https://img.freepik.com/vector-gratis/rey-dibujos-animados-sosteniendo-cetro-oro_29190-3074.jpg'>";
}

function accion3() {
  //   document.querySelector(".acciones").innerHTML += "<button>Button</button>";
  /* En este caso que hay que agregar algo adicional en más eficiente usar .insertAdjacentHTML ya que .innerHTML += es más bruto.
  .insertAdjacentHTML tiene 4 opciones:
    beforebegin: antes de ".acciones"
    afterbegin: iniciando el contenido de ".acciones"
    beforeend: finalizando el contenido de ".acciones"
    afterend: después de ".acciones"
  */
  document
    .querySelector(".acciones")
    .insertAdjacentHTML("beforeend", "<button>Button</button>");
}

function accion4() {
  document.querySelector(".acciones").innerHTML = "";
}
