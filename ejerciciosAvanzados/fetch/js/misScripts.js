//Fetch con archivo de texto
document.querySelector("#botonTxt").addEventListener("click", traerDatos);
let contenido = document.querySelector("#respuesta");

//fetch utiliza por defecto GET
function traerDatos() {
    fetch("texto.txt")  //parámetro url y sin ; al final
    .then(data => data.text()) //promesa que trasnforma el archivo en texto
    .then(datos => {
//        console.log(data)
        contenido.innerHTML = `<br><p>${datos}</p>`;
    })
}

document.querySelector("#botonApi").addEventListener("click", traerDatos2);
let contenido2 = document.querySelector("#resultadoApi");

function traerDatos2() {
    fetch("https://randomuser.me/api/")  //parámetro url y sin ; al final
    .then(data => data.json()) //promesa que trasnforma el archivo en texto
    .then(datos2 => {
        console.log(datos2.results["0"].name)
        contenido2.innerHTML = `
            <img src="${datos2.results["0"].picture.large}" width="150px" class="img-fluid rounded-circle">
            <p>${datos2.results["0"].name.title} ${datos2.results["0"].name.first} ${datos2.results["0"].name.last}</p>
            `;
    })    
}