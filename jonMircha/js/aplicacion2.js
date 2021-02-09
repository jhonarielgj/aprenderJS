"use strict";

setTimeout(() => {
    console.log("Ejecutando setTimeout, esto se ejecutará una vez");
}, 3000);

let i = 0;
setInterval(() => {
    // console.log("Ejecutando setInterval, esto se ejecutará indefinidamente cada cierto intervalo de tiempo");
    console.log(i++);
}, 1000);

/* const persona = {
    cc: 10136476,
    nombre: "Jhon",
    apellido: "Gómez",
    correo: "jhonarielgj@gmail.com"
}

console.log(persona);
console.log(persona.cc);
Object.keys(persona);
console.log(Object.keys(persona));

Object.keys(persona).forEach((valor) => {
    console.log(valor);
}); */