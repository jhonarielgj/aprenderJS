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

/* let meses = [
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
 */

//  Uso de TEMPLATE y FRAGMENT para generar código html dinámico

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// cardContent = [
//     {
//         title: "Tecnología",
//         image: "https://placeimg.com/200/200/tech"
//     },
//         {
//             title: "Animales",
//             image: "https://placeimg.com/200/200/animals"
//         },
//         {
//             title: "Arquitectura",
//             image: "https://placeimg.com/200/200/arch"
//         },
//         {
//             title: "Gente",
//             image: "https://placeimg.com/200/200/people"
//         },
//         {
//             title: "Naturaleza",
//             image: "https://placeimg.com/200/200/nature"
//         }
//     ];

//     cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.image);
//     $template.querySelector("img").setAttribute("alt", el.title);
//     $template.querySelector("figcaption").textContent = el.title;
    
//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }

class Users {
    constructor(nombre) {
        this.nombre = nombre;
        this.activo = true;
    }
    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}
console.log('Users: ', Users);

let jhon = new Users("Jhon");
console.log('jhon: ', jhon);

Users.prototype.activo = false;
console.log('Users: ', Users);

console.log('jhon: ', jhon);

