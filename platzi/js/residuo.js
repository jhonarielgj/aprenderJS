let resultado = document.getElementById("resultado");
let divisible = false;
let boton = document.getElementById("boton");
boton.addEventListener("click", evaluar);

function evaluar() {
    let numeroMaximo = document.getElementById("numeroTexto").value;
    console.log(numeroMaximo);
    for (let i = 1; i <= numeroMaximo; i++) {
        divisible = false;
        if (i % 3 == 0) {
            resultado.innerHTML += " Divisible por 3";
            divisible = true;
        } 
        if (i % 5 == 0) {
            resultado.innerHTML += " Divisible por 5";
            divisible = true;
        } 
        if (!divisible) {
            resultado.innerHTML += i;
        }
        resultado.innerHTML += "<br>";
    }
}
/*
evaluar = () => {
    let numeroMaximo = document.getElementById("numeroTexto").value;
    console.log(numeroMaximo);
    for (let i = 1; i <= numeroMaximo; i++) {
        divisible = false;
        if (i % 3 == 0) {
            resultado.innerHTML += " Fizz";
            divisible = true;
        } 
        if (i % 5 == 0) {
            resultado.innerHTML += " Buzz";
            divisible = true;
        } 
        if (!divisible) {
            resultado.innerHTML += i;
        }
        resultado.innerHTML += "<br>";
    }
}*/