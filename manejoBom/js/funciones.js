//Manejo del DOM
//Para cambiar contenido, propiedad y estilos css

//querySelector
//id # -- clase .
let a = document.querySelector("#uno");
a.style.color = "red";

let b = document.querySelector(".tercero h1");
b.style.color = "red";

let c = document.querySelector("div[class='segundo']")
c.style.color = "blue";

//querySelectorAll
let d = document.querySelectorAll("p")[2];  //devuelve array
d.style.color = "green";

//getElement
let e = document.getElementById("uno"); //id es único
e.style.color = "orange";

let f = document.getElementsByClassName("primero")[0]; //varios en arreglo
f.style.color = "brown";

let g = document.getElementsByTagName("p")[1]; //varios en arreglo
g.style.color = "black";
g.innerHTML = "<p>Nuevo texto</p>"; //reemplaza texto
g.innerHTML += " y contenido adicional"; //adicionar al final

//cambiar propiedades
f.className = f.className.replace("primero", "nueva"); //cambiar clase
f.style.color = "red";
f.style.border = "1px solid red";
f.style.fontFamily = "Arial";
f.style.fontSize = "20px";

let x = document.getElementById("rojo");
x.style.color = "white";
x.style.backgroundColor = "red";

let y = document.getElementById("verde");
y.style.color = "white";
y.style.backgroundColor = "green";

let z = document.getElementById("azul");
z.style.color = "white";
z.style.backgroundColor = "blue";

let h = document.getElementById('todo');
//console.log(h);
h.style.color = "red";

function fondo(color){
        if (color == "rojo") {
                h.style.backgroundColor = "red";
                h.style.color = "white";
        } else if (color == "verde") {
                h.style.backgroundColor = "green";
                h.style.color = "white";
        } else if (color == "azul") {
                h.style.backgroundColor = "blue";
                h.style.color = "white";
        } else {}
}

function getLink(){
        let g = document.getElementById("miLink");
        document.getElementById("resultado").innerHTML = g.href;
}

var cuerpo;
function load(){
        cuerpo = document.getElementById("cuerpo");
}

function borrarElemento(){
        var elementos = document.getElementsByClassName("elemento");
        console.log(elementos);
        cuerpo.removeChild(elementos.item(0));
}