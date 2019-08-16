let string = "Hola mi nombre en Jhon Ariel y esto aprendiendo a programar";

//Propiedades
console.log('string: ', string);
console.log("La longitud de la cadena es "+string.length);

//Métodos
console.log("La posición 16 de la cadena es: " + string.charAt(16));
console.log(".indexOf(caracter) Devulve la primera posición de la letra \"J\" es: " + string.indexOf("J"));
console.log(".lastIndexOf(caracter) Devuelve la última posición de la letra \"a\" es: " + string.lastIndexOf("a"));
console.log(".search(cadena) Buscando la cadena \"Jhon\" la encontramos en la posición: " + string.search("Jhon"));
//Match La expresión regular tiene 3 modificadores /g /i /m
//Sin modificador se detiene a la primera coincidencia, /g busca todas, /i no diferencia mayúsculas y minúsculas
// y con /m búsqueda en varias líneas
console.log("cadena1.match(expresión regular) extrae las dos partes de la cadena que son iguales");
//localeCompare compara dos cadenas y devuelve cuál va primero (alfabéticamente), devuelve:
//-1 si va antes, 0 si son iguales o 1 si va después
let cadena1 = "Hola, estoy probando la cadena";
let cadena2 = "Hola, estoy probando una cadena";
console.log("cadena1.localeCompare(cadena2): Devuelve -1 si la cadena 1 va antes, "+
            "0 si son iguales o 1 si va después. En este caso: " + cadena1.localeCompare(cadena2));
console.log(".includes(cad) La cadena incluye cad \"cadena\"? -> " + cadena1.includes("cadena"));
console.log("cadena1.startsWith(sub-cadena) y cadena2.endsWith(sub-cadena) " +
            "Devuelve true si se empieza o termina con la cadena del argumento ");
console.log("cadena1.concat(cadena2) concatena las cadenas 1 y 2");
console.log("cadena1.repeat(n): Repite la cadena n veces");
//slice Si sólo se da un número extrae desde la posición del número hasta el final
//Si ese sólo número es negativo extrae desde el final los últimos caracteres ej cadena1.slice(-5)
console.log(".slice(inicio,fin) Devuelve parte de la cadena. Ej caracteres entre el 5 y el 15:" + cadena1.slice(5,15));
console.log(".substr(inicio,#caracteres) Devuelve parte de la cadena. Iniciando en inicio el número "+
            "de caracteres indicados. Ej 4 caracteres desde la posición 10: " 
            + cadena1.substr(10,4));
console.log(".split(caracter,veces(opcional). Divide la cadena usando el caracter indicado, puede "+
            "definirse el número de veces que se hará. Ej separado por espacios: " + cadena1.split(" "));
console.log(".trim() Elimina los espacios al principio y al final");
console.log(".toLowerCase() convierte la cadena a minúsculas: " + cadena1.toLowerCase());
console.log(".toUpperCase() convierte la cadena a minúsculas: " + cadena1.toUpperCase());
let numero = 123;
let texto = "321"
console.log(".toUpperCase() convierte la cadena a minúsculas: " + numero.toString());
console.log(".toUpperCase() convierte la cadena a minúsculas: " + texto.valueOf());

