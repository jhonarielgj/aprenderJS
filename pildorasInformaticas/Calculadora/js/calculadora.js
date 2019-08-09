let total = 0;
let operacion = "+";
let borrarDisplay = true;
let cambioOperacion = false; //controlar el cambio de operación

function limpiar() {
  display.value = "0";
  total = 0;
  borrarDisplay = true;
  cambioOperacion = false;
}

function copy() {
  display.value = "Desarrollada por Jhon Gómez";
  borrarDisplay = true;
}

function display_numeros(numero) {
  if (borrarDisplay) {
    display.value = "";
  } 
  display.value += numero;
  borrarDisplay = false;
  cambioOperacion = false;
}

let btnSuma = document.getElementById("btnSuma");
btnSuma.addEventListener("click", operacionSuma);
let btnResta = document.getElementById("btnResta");
btnResta.addEventListener("click", operacionResta);
let btnMultiplica = document.getElementById("btnMultiplica");
btnMultiplica.addEventListener("click", operacionMultiplica);
let btnDivide = document.getElementById("btnDivide");
btnDivide.addEventListener("click", operacionDivide);
let btnResultado = document.getElementById("btnResultado");
btnResultado.addEventListener("click",mostrarResultado);

function operacionSuma() {
  resultado(operacion);
  operacion = "+";
  borrarDisplay = true;
  cambioOperacion = true;
}

function operacionResta() {
  resultado(operacion);
  operacion = "-";
  borrarDisplay = true;
  cambioOperacion = true;
}

function operacionMultiplica() {
  resultado(operacion);
  operacion = "*";
  borrarDisplay = true;
  cambioOperacion = true;
}

function operacionDivide() {
  resultado(operacion);
  operacion = "/";
  borrarDisplay = true;
  cambioOperacion = true;
}

function mostrarResultado() {
  resultado(operacion);
  cambioOperacion = true;
  borrarDisplay = true;
}

function resultado(operacion) {
  switch (operacion) {
    case "+":
      if (!cambioOperacion) {
        total += parseFloat(display.value);
        display.value = total;
      }
      break;
    case "-":
      if (!cambioOperacion) {
        total -= parseFloat(display.value);
        display.value = total;
      } 
      break;
    case "*":
        if (!cambioOperacion) {
          total *= parseFloat(display.value);
          display.value = total;
        }  
      break;
    case "/":
        if (!cambioOperacion) {
          total /= parseFloat(display.value);
          display.value = total;
        }
      break;
    default:
  }
}

document.getElementById("display").value = 0;
