//Para garantizar que el documento esté cargado antes de ejecutar el JS
if (document.addEventListener){
    window.addEventListener('load',ejecutarJS());
} else {
    window.attachEvent('onload',alert("Problemas al cargar la página"));
}

let datos = [];

function ejecutarJS() {
    
    //Aquí va el código JS
}


//Todo esto es reeemplazado por HTML5 en validación de formularios
/* function comprobarDatos() {
    let datosFormulario = document.getElementsByTagName("input"); //arreglo con todo los input
    //Mostrando la información por consola
    //console.log(datosFormulario);
    //console.log(datosFormulario[0].value);
    //console.log(datosFormulario[1].value);
    //console.log(datosFormulario[2].value);
    //console.log(document.getElementsByTagName("select").pais.value);
    //Generando un arreglo con la información
    datos.push(datosFormulario[0].value);
    datos.push(datosFormulario[1].value);
    datos.push(datosFormulario[2].value);
    datos.push(document.getElementsByTagName("select").pais.value);
    //Generando un objeto con la información
    datosObj = new Object;
    datosObj.Nombre = datosFormulario[0].value;
    datosObj.Apellido = datosFormulario[1].value;
    datosObj.Edad = datosFormulario[2].value;
    datosObj.Pais = document.getElementsByTagName("select").pais.value;
    
    for (let i = 1; i <= 10; i++) {
        if (datosFormulario[i].checked) {
            datos.push(datosFormulario[i].value);
        }
    }
    console.log(datos);
    console.log(datosObj);

    //Función para validar campos obligatorios reemplazada por html con etiqueta required
    let comprobar = document.getElementById("form_datos");
    comprobar.addEventListener("submit", comprobarDatos);
    if (datos[0] == "") {
        datosFormulario[0].onfocus;
        alert("Campo Nombre Obligatorio");
        event.preventDefault(); //para que el formulario no envíe la información
    }   
} */