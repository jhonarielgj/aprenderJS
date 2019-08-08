const express = require("express"); //Se trae la librería express como una función
const aplicacion = express(); //Todo express queda en una constante
 
aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
  resultado.send('Este es el home');
}
 
function cursos(peticion, resultado) {
    resultado.send('Estos son los <strong>cursos</strong>');
}

aplicacion.listen(3000);