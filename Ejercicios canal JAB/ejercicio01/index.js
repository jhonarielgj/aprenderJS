//Mi ejercicio
function click1() {
  const el = document.querySelector(".acciones");
  el.innerHTML = "Hola Mundo";
}
function click2() {
  const el = document.querySelector(".acciones");
  el.innerHTML = "";
  const img = new Image();
  img.src =
    "https://img.freepik.com/vector-gratis/rey-dibujos-animados-sosteniendo-cetro-oro_29190-3074.jpg";
  el.appendChild(img);
}
function click3() {
  const el = document.querySelector(".acciones");
  const boton = document.createElement("button");
  boton.type = "button";
  boton.innerHTML = "button";
  el.appendChild(boton);
}
function click4() {
  const el = document.querySelector(".acciones");
  el.innerHTML = "";
}
