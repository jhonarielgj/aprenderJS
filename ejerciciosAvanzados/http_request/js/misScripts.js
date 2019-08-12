/*http_request = new XMLHttpRequest();
http_request.onreadystatechange = validar;
http_request.open("GET", "texto.txt", true);
http_request.send();
console.log(http_request.readyState);
console.log(http_request.status);

function validar() {
    if (http_request.readyState == 4 && http_request.status == 400) {
        console.log(http_request.responseTXT);
    }
}*/

var http_request = false;
let ruta = "texto.txt";

function makeRequest(url) {

    http_request = false;

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
            alert(http_request.responseText);
        } else {
            alert('Hubo problemas con la petición.');
        }
    }

}

