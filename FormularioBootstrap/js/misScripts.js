const enviar = document.getElementById("formulario");
enviar.addEventListener("submit",guardarDatos);
const recuperar = document.getElementById("btnRecuperar");
recuperar.addEventListener("click",recuperarDatos);

//Leer los datos de html y guardarlos con localStorage  
function guardarDatos() {
    let datosFormulario = document.getElementsByTagName("input");
    console.log(datosFormulario);
    let nombre,correo,pwd,sexo;
    nombre = datosFormulario[0].value; 
    localStorage.setItem("Nombre", nombre);
    correo = datosFormulario[1].value; 
    localStorage.setItem("Correo", correo);
    pwd = datosFormulario[2].value;    
    localStorage.setItem("Pwd",pwd)
    if (datosFormulario[3].checked) {
        sexo = "Masculino";
    } else {
        sexo = "Femenino";
    }                                      
    localStorage.setItem("Sexo",sexo);
    if (datosFormulario[6].checked) {
        localStorage.setItem("Deporte","Si");
    } else {
        localStorage.setItem("Deporte","No");
    }                        
    if (datosFormulario[7].checked) {
        localStorage.setItem("Programacion","Si");
    } else {
        localStorage.setItem("Programacion","No");
    }    
    if (datosFormulario[8].checked) {
        localStorage.setItem("Lectura","Si");
    } else {
        localStorage.setItem("Lectura","No");
    }
}

//Recuperar datos almacenados en localStorage
function recuperarDatos() {
    let nombre,correo,pwd,sexo,deporte,programacion,leer;
    nombre = document.getElementById("nombre");
    nombre.value = localStorage.getItem("Nombre");
    correo = document.getElementById("correo");
    correo.value = localStorage.getItem("Correo");
    pwd = document.getElementById("pwd");
    pwd.value = localStorage.getItem("Pwd");
    sexo = localStorage.getItem("Sexo");
    if (sexo == "Masculino") {
        document.getElementById("masculino").checked;
    } else {
        document.getElementById("femenino").checked;
    }
    deporte = localStorage.getItem("Deporte");
    if (deporte == "Si") {
        document.getElementById("deporte").checked = true;;
    }
    programacion = localStorage.getItem("Programacion");
    if (programacion == "Si") {
        document.getElementById("programacion").checked = true;;
    }
    leer = localStorage.getItem("Lectura");
    if (leer == "Si") {
        document.getElementById("leer").checked = true;
    }
}