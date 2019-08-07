/*function color() {
  const parrafo = document.getElementsByTagName('p');
  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = 'red';  
    parrafo[i].style.textAlign = "center";
    parrafo[i].style.backgroundColor = "black";
  }
  console.log("Hola");
}*/

//Funcion color usando arrow expresion
color = () => {
  const parrafo = document.getElementsByTagName('p');
  for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.color = 'red';  
    parrafo[i].style.textAlign = "center";
    parrafo[i].style.backgroundColor = "black";
  }
  console.log("Hola");
}

/*function myFunction() {
  let x = document.getElementsByTagName("*");
  document.getElementById("demo").innerHTML = x[8].innerHTML;
}*/

//Usando arrow espression
myFunction = () => {
  let x = document.getElementsByTagName("*");
  document.getElementById("demo").innerHTML = x[8].innerHTML;
}

/*function saludar(nombre) {
//  console.log("Hola " + nombre);
  console.log(`Hola ${nombre}`); //nuevo formato usando ``
}*/

saludar = (nombre) => console.log(`Hola ${nombre}`);

//Forma regular de hacer funciones
// function viajando(destino) {
//   return "Viajando a la ciudad de " + destino;
// // }

//Arrow expression, nueva forma de hacer funciones
// nombre funcion = (parametros) => return (lo que va a devolver)
viajando = (destino) => "Viajando a la ciudad de " + destino;

let miNombre = "JAGJ";
//Funciones que se ejecutan sin ser llamadas
/*(function saludar2(nombre) {
  console.log(`Hola ${nombre}`); //nuevo formato usando ``
})(`${miNombre}`);  //Acá se entrega el parámetro si lo hay*/

//Función que se ejecuta sin ser llamada usando arrow expression
(saludar2 = (nombre) => console.log(`Hola ${miNombre}`))('${miNombre}');

//llamando a viaje
let viaje;
viaje = viajando('Pereira');
console.log(viaje);