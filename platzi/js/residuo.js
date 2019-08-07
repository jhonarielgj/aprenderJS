let resultado = document.getElementById("resultado");

function evaluar() {
    let numeroMaximo = document.getElementById("numeroTexto").value;
    console.log(numeroMaximo);
    for (let i = 1; i <= numeroMaximo; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultado.innerHTML += i+" BOTH<br>";
        } else if (i % 3 == 0) {
            resultado.innerHTML += i+" TRI<br>";
        } else if (i % 5 == 0) {
            resultado.innerHTML += i+" FIV<br>";
        } else {
            resultado.innerHTML += i+"<br>";
        }
    }
}