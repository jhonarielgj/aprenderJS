'use strict';

let array = [];

// AGREGAR Y ELIMINAR ELEMENTOS
// Agregar elementos al final con arreglo.push(elementos);
array.push(10);
console.log(array);
array.push(20,30,40,50);
console.log(array);
// Eliminar el ultimo con arreglo.pop();
array.pop();
console.log(array);
// Eliminar el primer elemento con arreglo.shif();
array.shift();
console.log(array);
// Agregar al inicio elementos con arreglo.unshift(elementos); 
array.unshift(1,2,3);
console.log(array);

// RECORRER ARREGLOS
let array2 = [10, 20, 30, 40, 50];
// For normal, acepta break y continue
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (element == 20) break;
    console.log('Elemento: ', element);
}
// forEach recorre todo el arreglo, no admite break y continue
array2.forEach(element => {
    console.log('Elemento: ', element);
});
// for in. Acepta break y continue, muestra todos los elementos del arreglo
// incluyedo arreglo2.nombre. Este es el único que lo muestra
array2.nombre = 'Jhon';
for (const i in array2) {
    const element = array2[i];
    console.log('Elemento: ', element);
}
// array.map El método map() crea un nuevo array con los resultados de la llamada
// a la función indicada aplicados a cada uno de sus elementos.
// var nuevo_array = arr.map(function callback(currentValue, index, array) {
//     // Elemento devuelto de nuevo_array
// }
let personas = [
    {nombre: 'Jhon', apellido: 'Gomez'},
    {nombre: 'Alexandra', apellido: 'Gonzalez'},
    {nombre: 'Lala', apellido: 'Gomez'},
    {nombre: 'Andres', apellido: 'Gomez'}
]

let nombreCompleto = personas.map (function (person) {
    return person.nombre + ' ' + person.apellido;
});
// Otra forma
function nombresCompletos(person) {
    return person.nombre + ' ' + person.apellido;
}
let nombres = personas.map(nombresCompletos);

// array.filter devuelve un arreglo que filtra los elementos que cumplen la condición
let persons = [
    {nombre: 'Jhon', apellido: 'Gomez', edad: 49},
    {nombre: 'Alexandra', apellido: 'Gonzalez', edad: 45},
    {nombre: 'Lala', apellido: 'Gomez', edad: 21},
    {nombre: 'Andres', apellido: 'Gomez', edad: 18}
]

let mayoresDeVeinte = persons.filter( function (persona) {
    if (persona.edad > 20) {
        return true;
    } else {
        return false;
    }
});

// array.reduce ejecuta una función reductora (que usted proporciona) 
// en cada elemento de la matriz, lo que da como resultado un único valor de salida.
let numbers = [1,2,5,7,8,10];

let suma = numbers.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
});
console.log('suma: ', suma);

let numbers2 = [[-1,0],1,[2,5],7,[8],[10,12,14]];

let arregloPlano = numbers2.reduce(function (acumulador, elemento) {
    // if (Array.isArray(elemento)) {
    //     acumulador = acumulador.concat(elemento);
    // } else {
    //     acumulador.push(elemento);   
    // }
    // return acumulador;
    //Otra forma más corta
    return Array.isArray(elemento) ? acumulador.concat(elemento) : acumulador.concat([elemento]);
}, []);
console.log('arregloPlano ' + arregloPlano);
