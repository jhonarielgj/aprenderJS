//VENTANAS -> alert() - prompt() - confirm()

//EVENTOS DE TIEMPO
//setTimeout(funcion,milisegundos). Demora la ejecución 'x' milisegundos
setTimeout(saludo,2000);

function saludo() {
    console.log("Hola");  
}

//setInterval(funcion,milisegundos). Repite la función cada x milisegundos
let int = setInterval(reloj, 1000);
function reloj() {
    let fecha = new Date();
    console.log(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
}
