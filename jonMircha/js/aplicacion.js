// 1) Programa una función que cuente el número de caracteres de una cadena de 
// texto, pe. miFuncion("Hola Mundo") devolverá 10.
let cadena = prompt('Digite una cadena');

/*function contarCarateres(cadena) {
    if (cadena.length) {
        console.log(`El texto ${cadena} tiene ${cadena.length} carateres`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
contarCarateres(cadena);*/

// 2) Programa una función que te devuelva el texto recortado según el número de 
// caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/*let numeroCaracteres = prompt('Digite número de carateres a extraer');

function subCadena(cadena, caracteres) {
    if (cadena.length) {
        let cadena2 = cadena.slice(0, caracteres);
        console.log(`La subcadena de ${caracteres} caracteres de ${cadena} es ${cadena2}`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
subCadena(cadena, caracteres);*/

// 3) Programa una función que dada una String te devuelva un Array de textos 
// separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
// devolverá ['hola', 'que', 'tal'].
/*let caracter = prompt("Digite caracter separador")

function arreglo(cadena, caracter) {
    if (cadena.length) {
        let arreglo = cadena.split(caracter);
        console.log(`El arrego es ${arreglo}`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
arreglo(cadena, caracter);*/

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo',3)
// devolverá Hola Mundo Hola Mundo Hola Mundo.
let veces = prompt("Cuántas veces repetirá el texto?")

function repetirTexto(cadena, veces) {
    let cadena2 = "";
    if (cadena.length) {
        console.log(`El texto ${veces} veces es: `);
        for (let i = 0; i < veces; i++) {
            cadena2 += cadena;
        }
    } else {
        console.warn("El valor introducido no es válido");
    }
    console.log(cadena2);
}
repetirTexto(cadena, veces);
