/*
parseInt(número) => elimina decimales
Math => Objeto para operaciones matemáticas complejas
Math.ceil(número) => redondea hacia el entero más alto
Math.floor(número) => redondea hacia el entero más bajo
Math.random() => número aleatorio entre 0 y 1
*/

aleatorio (min, max) => {
    let resultado = Math.ceil(Math.random() + (max - min + 1)) + min;
    return resultado;
}

