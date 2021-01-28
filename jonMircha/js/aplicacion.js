'use strict';

document.write('<h3> Ejercicios Resueltos </h3>');

// 1) Programa una función que cuente el número de caracteres de una cadena de 
// texto, pe. miFuncion("Hola Mundo") devolverá 10.
//let cadena = prompt('Digite una cadena'); 

function contarCarateres(cadena) {
    if (cadena.length) {
        console.log(`El texto ${cadena} tiene ${cadena.length} carateres`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
// contarCarateres(cadena);

// 2) Programa una función que te devuelva el texto recortado según el número de 
// caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// let numeroCaracteres = prompt('Digite número de caracteres a extraer');

function subCadena(cadena, caracteres) {
    if (cadena.length) {
        let cadena2 = cadena.slice(0, caracteres);
        console.log(`La subcadena de ${caracteres} caracteres de ${cadena} es ${cadena2}`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
// subCadena(cadena, caracteres);

// 3) Programa una función que dada una String te devuelva un Array de textos 
// separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
// devolverá ['hola', 'que', 'tal'].
// let caracter = prompt("Digite el caracter separador")

function arreglo(cadena, caracter) {
    if (cadena.length) {
        let arreglo = cadena.split(caracter);
        console.log(`El arreglo es ${arreglo}`);
    } else {
        console.warn("El valor introducido no es válido");
    }
}
// arreglo(cadena, caracter);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo',3)
// devolverá Hola Mundo Hola Mundo Hola Mundo.
// let veces = prompt("Cuántas veces repetirá el texto?")

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
// repetirTexto(cadena, veces);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. 
// miFuncion("Hola Mundo") devolverá "odnuM aloH".
function invTexto(texto) {
    let nuevaCadena = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        nuevaCadena += texto[i];
    }
    console.log(`${texto} invertido queda ${nuevaCadena}`);
}
// invTexto('Jhon');

// //Otra forma
function invertirTexto2(texto) {
    (!texto) ?
    console.error('Ingrese una cadena válida'): console.log(`El texto invertido queda ${texto.split("").reverse().join("")}`);
}
// invertirTexto2('Jhon Ariel');
// invertirTexto2('');

// 6) Programa una función para contar el número de veces que se repite una palabra 
// en un texto largo, pe. miFuncion("hola mundo adiós mundo", "mundo") devolverá 2.
function contarTexto(parrafo, textoBuscar) {
    let posicion = 0,
        contador = 0;
    while (posicion != -1) {
        posicion = parrafo.toLowerCase().indexOf(textoBuscar.toLowerCase(), posicion + 1);
        if (posicion != -1) {
            contador++;
        }
    }
    console.log(`La palabra ${textoBuscar} está ${contador} veces`);
}
const parrafo = 'A sit lorem lorem itsum dolor sit amet, consectetur adsitipiscing elit, \
    lorem itsum do lor sit sit amet, consectetur adipiscing sit elit';
// contarTexto(parrafo, "dolor");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function palindroma(frase) {
    frase = frase.toLowerCase();
    if (frase.length) {
        const nuevaCadena = frase.split("").reverse().join("");
        frase == nuevaCadena ?
            console.log(`La frase ${frase} es palíndroma`) :
            console.log(`El frase ${frase} No es palíndroma`);
    } else {
        console.error(`${frase} no es una cadena válida`);
    }
}
// palindroma('Salas');

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const elimiarCaracteres = (texto = '', patron = '') =>
    (!texto) 
    ?console.warn("El valor introducido no es válido") 
    :(!patron) 
        ?console.warn("No ingresó el patrón") 
        :console.info(texto.replace(new RegExp(patron, "ig"), ""));
// elimiarCaracteres();
// elimiarCaracteres("x");
// elimiarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// // 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function aleatorio() {
    let numero = 500 + Math.round(Math.random() * 100);
    console.log('Número aleatorio: ', numero);
}
// aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function capicua(numero) {
    if (!isNaN(numero)) {
        const numeroTexto = numero.toString();
        const nuevaCadena = numeroTexto.split("").reverse().join("");
        numeroTexto == nuevaCadena ?
            console.log(`El número ${numero} es capicúa`) :
            console.log(`El número ${numero} No es capicúa`);
    } else {
        console.error(`${numero} no es un número válido`);
    }
    // console.log(numero, numeroTexto);
}
// capicua(120021);
// capicua(12354);
// capicua('Jhon');

// 11) Programa una función que calcule el factorial de un número (El factorial de un 
//     entero positivo n, se define como el producto de todos los números enteros 
//     positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function factorial(numero) {
    if (numero > 0 && typeof (numero) === 'number') {
        let factorial = 1;
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log(`El factorial de ${numero} es ${factorial}`);
    } else {
        console.error(`El valor '${numero}' introducido no es válido `);
    }
}
// factorial('');
// factorial(-2);
// factorial(0);
// factorial(10);

// 12) Programa una función que determine si un número es primo (aquel que solo es 
//     divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function numPrimo(numero) {
    if (!isNaN(numero) && numero > 0) {
        let esPrimo = 0;
        let contador = 0;
        for (let i = 1; i < numero; i++) {
            if (esPrimo = numero % i === 0) {
                contador++;
            }
        }
        if (contador === 1 || numero === 0) {
            console.warn(`${numero} es un número primo`);
        } else {
            console.error(`${numero} No es un número primo`);
        }
    } else {
        console.error(`El valor ${numero} introducido no es válido`)
    }
}
// numPrimo(0);
// numPrimo(-7);
// numPrimo(9);
// numPrimo(17);
// numPrimo('a');

//Otra format
const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresó un número');
    if (typeof numero !== 'number') return console.warn(`El valor ${numero} introducido no es un número`);
    if (numero === 0) return console.warn(`El valor no puede ser 0`);
    if (numero === 1) return console.warn(`El valor no puede ser 1`);
    if (Math.sign(numero) === -1) return console.warn(`El valor no puede ser negativo`);

    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            divisible = true;
            break;
        }
    }

    return (divisible) ?
        console.log(`El número ${numero} No es Primo`) :
        console.log(`El número ${numero} es Primo`);
}
// numeroPrimo();
// numeroPrimo('5');
// numeroPrimo(-5);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(1997);
// numeroPrimo('a');

// 13) Programa una función que determine si un número es par o impar, pe. 
// miFuncion(29) devolverá Impar.
function esPar(numero) {
    if (!isNaN(numero)) {
        let esPar = 0;
        if (esPar = numero % 2 === 0) {
            console.warn(`El número ${numero} es par `);
        } else {
            console.warn(`El número ${numero} es impar `);
        }
    } else {
        console.error(`El valor ${numero} introducido no es válido`);
    }
}
// esPar(4504655555555512);
// esPar(5);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn(`No ingresó ningún valor a convertir`);
    if (typeof grados !== "number") return console.warn(`El valor ${grados} ingresado, NO es un número`);
    if (unidad === undefined) return console.warn(`No ingresó el tipo de grado a convertir`);
    if (typeof unidad !== "string") return console.warn(`El valor ${unidad} ingresado, No es texto`);
    // Expresiones regulares /(C|F){1}/gi.test(unidad) valida que la variable unidad sólo valga C o F
    // y que tenga un sólo caracter.
    if (unidad.length !== 1 || !/(C|F){1}/gi.test(unidad)) return console.warn(`El caracter debe ser "C" o "F"`);
    if (unidad === "C") {
        return console.log(`${grados}°C = ${Math.round((grados*(9/5) + 32))}°F`);
    } else if (unidad === "F") {
        return console.log(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`);
    } else {
        return console.error(`El tipo de grados a convertir NO es válido`);
    }
}
//  convertirGrados(100,"F");
//  convertirGrados(38,"C");
//  convertirGrados(38,"Da");
//  convertirGrados(38,"D");

////////////////////////////////ejercicio recorrer un arreglo usando for in
const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
const arregloFuncion = (arreglo) => {
    for (const i in arreglo) {
        console.log(`i: ${i} - arreglo[${i}] ${arreglo[i]}  `);
    }
}
// arregloFuncion(array1);
////////////////////////////////////////////////////////////////

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresó número a convertir");

    if (typeof numero !== "number") return console.warn(`El valor "${numero}" ingresado NO es un número`);

    if (base === undefined) return console.warn("No ingresó número a convertir");

    if (typeof base !== "number") return console.warn(`El valor "${base}" ingresado NO es un número`);

    if (base === 2) {
        return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.log(`${numero} base ${base} = ${numero.toString(2)} base 10`);
    }
}
// convertirBinarioDecimal();
// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100,'2');
// convertirBinarioDecimal(100,2);
// convertirBinarioDecimal(1110010,2);
// convertirBinarioDecimal(114,10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
// cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn(`No se ingresó ningún nombre`);

    if (typeof nombre !== "string") return console.warn(`El valor ${nombre} ingresado no es una 
    cadena de texto`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg) 
        ?console.info(`"${nombre}", es un nombre válido`) 
        :console.info(`"${nombre}", NO es un nombre válido`);
}
// validarNombre();
// validarNombre(3);
// validarNombre("Jhon Ariel");
// validarNombre("Jhon Gómez");

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día 
// de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresó una fecha");

    if (!(fecha instanceof Date)) return console.error(`El valor ingresado no es una fecha válida`);

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    const ANIOS_EN_MS = 1000 * 60 * 60 * 24 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha / ANIOS_EN_MS);

    return (Math.sign(aniosHumanos) === -1) 
        ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        :(Math.sign(aniosHumanos) === 1) 
            ?console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            :console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}
// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(1970,2,6));
// calcularAnios(new Date(2058,2,6));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y 
// consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena = undefined) => {
    if (cadena === undefined) return console.warn(`No introdujo texto para evaluar`);

    if (typeof cadena !== "string") return console.warn(`El valor ${cadena} ingresado no es
    una cadena válida`);

    let cadenaOriginal = cadena,
    vocales = 0, 
    consonantes = 0;

    cadena = cadena.toLowerCase();

    for (const letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) {
             vocales++;
        } 
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {

            consonantes++;
        }
    }
    
    // return console.log(`La frase ${cadenaOriginal} tiene ${vocales} vocales y ${consonantes} consonantes`);
    return console.info({
        cadenaOriginal,
        vocales,
        consonantes
    })
}
// contarLetras();
// contarLetras(123);
// contarLetras("123");
// contarLetras("Jhon Ariel");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. 
// miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre2 = (nombre="") => {
    if (!nombre) return console.warn(`No ingresó un nombre`);

    if (typeof nombre !== "string") return console.warn(`El valor ${nombre} ingresado, NO
    es una cadena de texto`);
    //Usando expresiones regulares
    
    let expReg = /^[A-Za-zñÑáéíóúüÁÉÍÓÚÜ\s]+$/g.test(nombre);

    return (expReg) 
    ? console.info(`"${nombre}" es un nombre válido`) 
    : console.warn(`"${nombre}" NO es un nombre válido`);
}
// validarNombre2();
// validarNombre2(3);
// validarNombre2("Jhon Gómez");
// validarNombre2("Jhon70");
// validarNombre2("Jhon-Ariel");

// 20) Programa una función que valide que un texto sea un email válido, pe. 
// miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email="") => {
    if (!email) return console.warn(`No ingresó un E-mail`);

    if (typeof email !== "string") return console.warn(`El valor ${email} ingresado, NO
    es una cadena de texto`);
    //Usando expresiones regulares
    
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) 
    ? console.info(`"${email}" es un E-mail válido`) 
    : console.warn(`"${email}" NO es un E-Mail válido`);
}
// validarEmail();
// validarEmail(3);
// validarEmail("jhon,ariel@gmail");
// validarEmail("jhonariel@gmail.co");

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados 
// al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
// almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
// devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los números ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


// 26) Programa una función que dado un arreglo de números obtenga el promedio, 
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.
// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarId(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`No ingresó un valor para "${propiedad}"`);
        if (typeof valor !== "string") return console.warn(`El valor ${propiedad} "${valor}" ingresado, NO
        es una cadena de texto`); 
        return true;
    }

    validarLargoCadena(propiedad, valor, largo) {
        if (valor.length > largo) {
            return console.error(`${propiedad} "${valor} excede los ${largo} caracteres permitidos`);
        }
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if (typeof valor !== "number") return console.warn(`${propiedad} "${valor}" ingresado, NO es un número`); 
        return true;
    }

    validarArreglo(propiedad,valor) {
        if (!valor) return console.warn(`No ingresó un valor para "${propiedad}"`);
        if (!(valor instanceof Array)) return console.warn(`El valor ${propiedad} "${valor}" ingresado, NO es un arreglo`); 
        if (valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor) {
            if (typeof cadena !== "string") return console.warn(`El valor ${cadena} ingresado, NO es una cadena de texto`);
        }
        return true;
    }

    validarId(id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                console.error(`IMDB id "${id}" no es un valor válido, debe iniciar con 2 letras minúsculas y después 7 números`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo)){
            this.validarLargoCadena("Título", titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)){
            this.validarLargoCadena("Director", director, 50);
        }
    }
    
    validarEstreno(estreno) {
        if (this.validarNumero("Estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                console.error(`Estreno "${estreno}" no es un valor válido, debe ser entero de cuatro números`);
            }
        }
    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }

    validarGeneros(generos) {
        let generosIncorrectos = "";
        if (this.validarArreglo("Generos", generos)) {
            for (const genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    generosIncorrectos += genero + " - ";
                }
            }
            if (generosIncorrectos) {
                console.error(`Generos incorrectos "${generosIncorrectos.substring(0, generosIncorrectos.length-3)}"`);
                Pelicula.generosAceptados();
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Califiación", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
            ? console.error(`La calificación debe ser entre 0 y 10`)
            : this.calificacion = calificacion.toFixed(1);
        }
    }
    
    fichaTecnica() {
        console.info(`Ficha técnica:\nIMDB id: ${this.id}\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nEstreno: ${this.estreno}\nPais(es): "${this.pais.join(", ")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"`)
    }
}

const MI_PELI = new Pelicula({
    id: 'id1234567',
    titulo : 'Título Película',
    director: 'Director Película',
    estreno: 1970,
    pais: ['Colombia', "EEUU"],
    generos: ['Drama', 'Western'],
    calificacion: 9.154
});

MI_PELI.fichaTecnica();

const MIS_PELIS = [
    {
        id: 'id1234567',
        titulo : 'Título Película',
        director: 'Director Película1',
        estreno: 1970,
        pais: ['Colombia'],
        generos: ['Drama'],
        calificacion: 9.54
    },
    {
        id: 'id1234567',
        titulo : 'Título Película2',
        director: 'Director Pel.',
        estreno: 1972,
        pais: ['Colombia', "EEUU"],
        generos: ['Drama', 'Western'],
        calificacion: 8.54
    },
    {
        id: 'id1234567',
        titulo : 'Título Película3',
        director: 'Dir. Película',
        estreno: 1973,
        pais: ["EEUU"],
        generos: ['Western'],
        calificacion: 6.4
    }
];

MIS_PELIS.forEach(element => new Pelicula(element).fichaTecnica());