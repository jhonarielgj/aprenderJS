"use strict";

setTimeout(() => {
    console.log("Ejecutando setTimeout, esto se ejecutará una vez");
}, 3000);

let i = 0;
setInterval(() => {
    // console.log("Ejecutando setInterval, esto se ejecutará indefinidamente cada cierto intervalo de tiempo");
    console.log(i++);
}, 1000);

