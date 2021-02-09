"use strict";

/* console.log("Document", document);
console.log("Body", document.body);
console.log("Links: ", document.links);
console.log("Hostname: ",document.location.hostname);
console.log("Host: ", document.location.host);
console.log("Pathname: ", document.location.pathname); 
console.log("Title: ", document.title);
console.log("Charset: ", document.charset);
console.log("Doctype: ", document.doctype);
console.log("Forms: ", document.forms);
console.log("Scripts: ", document.scripts);*/
// getSelection() para mostrar el texto seleccionado
/* setTimeout(() => {
    console.log("Texto seleccionado: ", document.getSelection().toString());
}, 3000); */
/* setInterval(() => {
    console.log("Texto seleccionado: ", document.getSelection().toString());
}, 3000); */

/* let btn = document.querySelector("button");
btn.onclick = () => {
    console.log("Hizo click");
} */

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

document.write(`<h2>Meses</h2>`);
let $ul = document.createElement("ul");
console.log('$ul: ', $ul);
document.body.appendChild($ul);
meses.forEach(element => {
    const $li = document.createElement("li");
    $ul.appendChild($li).innerHTML += element;
    // console.log('$li: ', $li);
});


