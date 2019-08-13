//AJAX XMLHttpRequest con archivo de texto
document.querySelector("#botonTxt").addEventListener("click", traerDatos);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#respuesta").innerHTML = this.responseText;
        }
    }
}

//AJAX XMLHttpRequest con archivo JSON
document.querySelector("#botonJson").addEventListener("click", traerDatosJson);

function traerDatosJson() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);  //Muestra el archivo como texto
            datos = JSON.parse(this.responseText); //Convierte archivo JSON en un objeto
            //console.log(datos); //muestra el objeto
            let resultado = document.querySelector("#resultado");
            resultado.innerHTML = "";
            let j = 1;
            for (let item of datos) { 
                resultado.innerHTML += `
                    <tr>
                    <th scope="row">${j}</th>
                    <td>${item.titulo}</td>
                    <td>${item.nivel}</td>
                    </tr>
                    `;
                j++;
            }
        }
    }
}

//AJAX XMLHttpRequest con archivo JSON
document.querySelector("#botonApi").addEventListener("click", traerDatosApiPublica);  //ejecuta la función al hacer click
//Si necesito entregar una función con parámetros utilizo una función anónima:
/*
document.querySelector("#botonApi").addEventListener("click", function() {
    traerDatosApiPublica(parámetros)); //así evito que se ejecute automáticamente
}) 
*/

function traerDatosApiPublica() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.datos.gob.mx/v1/condiciones-atmosfericas", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);  //Muestra el archivo como texto
            datos = JSON.parse(this.responseText); //Convierte archivo JSON en un objeto
            console.log(datos.results); //muestra el objeto
            let resultado = document.querySelector("#resultadoApi");
            resultado.innerHTML = "";
            let j = 1;
            for (let item of datos.results) { 
                resultado.innerHTML += `
                    <tr>
                    <th scope="row">${item.cityid}</th>
                    <td>${item.name}</td>
                    <td>${item.skydescriptionlong}</td>
                    <td>${item.winddirectioncardinal}</td>
                    <td>${item.windspeedkm}</td>
                    </tr>
                    `;
                j++;
            }
        }
    }
}

//OTRA FORMA bajada de internet para HttpRequest
/* var http_request = false;

function makeRequest() {
    http_request = false;
    let url = "texto.txt";
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send();
    console.log(http_request.readyState);
    console.log(http_request.status);
}

function alertContents() {
    console.log(http_request.readyState);
    console.log(http_request.status);
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            console.log(document.querySelector("#respuesta"));
            document.querySelector("#respuesta").innerHTML = http_request.responseText;
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
} */