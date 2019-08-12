document.querySelector("#boton").addEventListener("click", traerDatos);

function traerDatos() {
    //console
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(http_request.responseTXT);
            //document.querySelector("#respuesta").innerHTML = http_request.responseText;
        }
    }
}

/*
var http_request = false;

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

}*/