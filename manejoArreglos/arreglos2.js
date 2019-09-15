'use strict';

// array.from convierte en arreglos objetos con estructura similares a un arreglo
let saludo = 'Hola mundo';
let caracteres = Array.from(saludo);  //es mejor que texto.split();
console.log('caracteres: ', caracteres);
// devuelve ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]

let nodeList = document.getElementsByClassName('.nodo');
console.log(nodeList[0]);

// arreglo.slice(ind inic, ind final); devuelve un arreglo desde el ind inic hasta ind final

let nPrimos = [1, 3, 5, 7, 11, 13, 17, 19];
console.log('primos: ', nPrimos);
let subPrimos = nPrimos.slice(4, nPrimos.length - 1);
console.log('subPrimos: ', subPrimos);
let ultimoPrimo = nPrimos.slice(nPrimos.length - 1);
console.log('ultimoPrimo: ', ultimoPrimo);
// ********************************************************
let startTime = new Date();
console.log('startTime: ', startTime);
let primos = [];
for (let i = 2; i <= 10000000; i++) {
    let esPrimo = true;
    for (let j = 2; j <= i - 1; j++) {
        let modulo = i % j;
        if (modulo == 0) {
            esPrimo = false;
            break;
        };
    };
    if (esPrimo) {
        primos.push(i);
    };
};
let endTime = new Date();
console.log('endTime: ', endTime);
let tiempoTotal = (endTime - startTime)/1000 + 's';
console.log('primos: ', primos);
console.log('tiempoTotal: ', tiempoTotal);
