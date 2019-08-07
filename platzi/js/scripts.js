let gTierra = 9.8;
let gMarte = 3.7;
let gJupiter = 24.8;

/*function calcularPeso(){
    let pesoTierra = document.getElementById("peso").value;
    let pesoMarte = parseInt(pesoTierra) * gTierra / gMarte;
    pesoMarte = parseInt(pesoMarte);
    document.getElementById("marte").innerHTML += "Su peso en Marte es : " + pesoMarte + " kilos";
    let pesoJupiter = parseInt(pesoTierra * gTierra / gJupiter);
    document.getElementById("jupiter").innerHTML += "Su peso en Júpiter es: " + pesoJupiter + " kilos";
    return(pesoJupiter);
}*/

//usando arrow expresion
calcularPeso = () => {
    let pesoTierra = document.getElementById("peso").value;
    let pesoMarte = parseInt(pesoTierra) * gTierra / gMarte;
    pesoMarte = parseInt(pesoMarte);
    document.getElementById("marte").innerHTML += `Su peso en Marte es : ${pesoMarte} kilos`;
    let pesoJupiter = parseInt(pesoTierra * gTierra / gJupiter);
    document.getElementById("jupiter").innerHTML += `Su peso en Júpiter es: ${pesoJupiter} kilos`;
    return(pesoJupiter);    
}

/*function limpiar(){
    document.getElementById("peso").value.innerHTML = "";
    document.getElementById("marte").innerHTML = "";
    document.getElementById("jupiter").innerHTML = "";
}*/

//Usando arrow expresion
limpiar = () => {
    document.getElementById("peso").value.innerHTML = "";
    document.getElementById("marte").innerHTML = "";
    document.getElementById("jupiter").innerHTML = "";
}

//Código del curso modificado (hace cosas diferentes a lo que hice)
let usuario;
do {
    usuario = prompt("Cuál es tu peso?");
} while (isNaN(usuario));  //validar que sea numérico
let planeta;
let salir = true;
while (salir) {
    planeta = prompt("Elige tu planeta\n Marte o Júpiter");
    planeta = planeta.replace(" ","");  //limpiar espacios
    planeta = planeta.toLowerCase(planeta); 
    if ((planeta == "marte") || (planeta == "jupiter") || (planeta == "júpiter")) {
        salir = false;
    }
}
let peso = parseInt(usuario);
let g_tierra = 9.8;
let g_marte =3.7;
let g_jupiter = 24.8;
let peso_final
if (planeta == "marte"){
    peso_final = peso * g_marte / g_tierra;
    peso_final = parseInt(peso_final)
    document.write("Tu peso en " + planeta+ " es de <strong>" + peso_final + " Kilos </strong>")
}
else    {
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = parseInt(peso_final)
    document.write("Tu peso en " + planeta+ " es de <strong>" + peso_final + " Kilos </strong>")
}