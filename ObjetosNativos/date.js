//Los meses y días de la seman inician en 0 (domingo)
let ahora = new Date();
console.log("Date(). La fecha actual es " + ahora);
//Algunas formas de crear fechas con cadenas
let d1 = new Date("January 6 2016");
console.log('d1: ', d1);
let d2 = new Date("Oct 25 2016"); //Puede ser 25 Oct 2016
console.log('d2: ', d2);
let d3 = new Date("2019-03-06T12:34:21");
console.log('d3: ', d3);
let d4 = new Date("2019-06-03"); //YYYY-MM-DD
console.log('d4: ', d4);
let d5 = new Date("2019/03/06"); //YYYY/MM/DD o DD/MM/YYYY
console.log('d5: ', d5);
let d6 = new Date("2019-05"); //se substituye el día por 1
console.log('d6: ', d6);
let d7 = new Date("2019"); //se substituyen el día y el mes por 1
console.log('d7: ', d7);
//Fechas con milisegundos
let dms = new Date(86400000);
console.log('dms: ', dms);
//Fechas con números Date(año,mes,dia,hora,min,seg)
let fechaLarga = new Date(1970,2,6,13,28,5);
console.log('fechaLarga: ', fechaLarga);
let fechaCorta = new Date(1970,2,6);
console.log('fechaCorta: ', fechaCorta);

//Imprimir fechas
var fecha2 = new Date();
console.log("Fecha: " + fecha2);
console.log("toString() " + fecha2.toString());
console.log("toUTCString() " + fecha2.toUTCString());
console.log("toDateString() " + fecha2.toDateString());

//METODOS GET. Extraer algo de una fecha
console.log(".getDay(). El día de la semana de " + fecha2 + " es: " + fecha2.getDay());
console.log(".getDate(). El día del mes de " + fecha2 + " es: " + fecha2.getDate());
console.log(".getMonth(). El mes de " + fecha2 + " es: " + fecha2.getMonth());
console.log(".getFullYear(). El año de " + fecha2 + " es: " + fecha2.getFullYear());
console.log(".getHours(). La hora de " + fecha2 + " son: " + fecha2.getHours());
console.log(".getMinutes(). Los minutos de " + fecha2 + " son: " + fecha2.getMinutes());
console.log(".getSeconds(). Los segundos de " + fecha2 + " son: " + fecha2.getSeconds());
console.log(".getMilliseconds(). Los milisegundos de " + fecha2 + " son: " + fecha2.getMilliseconds());
console.log(".getTime(). Milisegundos desde 1/1/1970 son: " + fecha2.getTime());

//METODOS SET. Cambiar datos de una fecha
fecha2.setDate(30);
fecha2.setMonth(11);
fecha2.setFullYear(2031);
fecha2.setHours(23);
fecha2.setMinutes(59);
fecha2.setSeconds(29);
fecha2.setMilliseconds(11);
console.log('fecha2: ', fecha2);
//Calculo con horas agregar 3 meses
fecha2.setMonth(fecha2.getMonth()+3);
console.log('fecha2: ', fecha2);



