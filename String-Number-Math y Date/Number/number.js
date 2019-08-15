//Sólo hay un tipo Número y se puede guardar así:
let entero = 9;
console.log('entero: ', entero);
let decimal = 3.141596;
console.log('decimal: ', decimal);
let cientifica = 12e-5;
console.log('cientifica: ', cientifica);
let hexadecimal = 0xFF; //número 255
console.log('hexadecimal: ', hexadecimal);

var base10 = 123;
console.log(".toString(). Cambiar base a un número. Ej el número 123 en base 2 " + 
            "(binario) es: " + base10.toString(2));
console.log(".toString(). Cambiar base a un número. Ej el número 123 en base 8 es: "
            + base10.toString(8));
console.log(".toString(). Cambiar base a un número. Ej el número 123 en base Hexadecimal es: "
            + base10.toString(16));
var atipico = 100/"c10";
console.log("La variable atipico es un NaN? -> " + isNaN(atipico));
console.log("Qué tipo es NaN? -> " + typeof(atipico));

//Números como objetos
let n1 = 123; //tipo de datos primitivo
let n2 = new Number(123); //NO usar
console.log("Tipo de la variable n1: " + typeof(n1)); //devuelve number
console.log("Tipo de la variable n2: " + typeof(n2)); //devuelve object

//Propiedades
let maximo = Number.MAX_VALUE;
console.log("El máximo valor de una variable es: " + maximo);
let minimo = Number.MIN_VALUE;
console.log("El máximo valor de una variable es: " + minimo);

//Métodos
let x = 3.141596;
let y = "3.161596";
console.log("numero.toFixed(#) define número de decimales (pi con 2 " + 
            "decimales): " + x.toFixed(2)); //devuelve 3.14
console.log("numero.toPrecision(#) devuelve número de números: " + 
            x.toPrecision(2)); //devuelve 3.1
console.log("numero.toExponencial(#) devuelve número en notación científica: " + 
            x.toExponential(2)); //devuelve 3.14e+0
console.log("texto.valueOf() Convierte texto a número: " + 
            y.valueOf()); //devuelve 3.141596 como número
console.log("numero.toString() Convierte texto a número: " + 
            x.toString()); //devuelve 3.141596 como texto

//Métodos globales
//Number()  
console.log("Number(variable) Devuelve el valor numérico: " + 
            Number(y)); //devuelve 3.141596 como número
console.log(Number(true)); //devuelve 1
console.log(Number(false)); //devuelve o
console.log(Number(new Date())); //devuelve milisegundos desde 1970
console.log(Number("10")); //devuelve 10
console.log(Number("casa")); //devuelve NaN
console.log("----");
//parseInt()
console.log(parseInt("10.3")); //devuelve 10
console.log(parseInt("10 20")); //devuelve 10
console.log(parseInt("10 casa")); //devuelve 10
console.log(parseInt("casa 10")); //devuelve NaN
console.log("----");
//parseFloat()
console.log(parseFloat("10.34")); //devuelve 10
console.log(parseFloat("10 20")); //devuelve 10
console.log(parseFloat("10 casa")); //devuelve 10
console.log(parseFloat("casa 10")); //devuelve NaN


