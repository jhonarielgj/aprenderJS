class Pakiman {
    constructor(nombre, vida, ataque) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre);
    }
    /*mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque);
        document.write("</p>");
    }*/
    //Agregando la información a un div con id de cada nombre
    /*mostrar() {
        document.body.innerHTML += '<div class = "divResultado" id = "'+ this.nombre +'"></div>';
        let div = document.getElementById(this.nombre);
        div.appendChild(this.imagen);
        div.innerHTML += "<p>";
        div.innerHTML += "<strong>" + this.nombre + "</strong><br>";
        div.innerHTML += "Vida: " + this.vida + "<br>";
        div.innerHTML += "Ataque: " + this.ataque;
        div.innerHTML += "</p>";
    }*/
    //Notacion arrow function
    mostrar = () => {
        document.body.innerHTML += `<div class = "divResultado" id = "${this.nombre}"></div>`;
        let div = document.getElementById(this.nombre);
        div.appendChild(this.imagen);
        div.innerHTML += `<p>`;
        div.innerHTML += `<strong>${this.nombre}</strong><br>`;
        div.innerHTML += `Vida: ${this.vida} <br>`;
        div.innerHTML += `Ataque: ${this.ataque}</p>`;
    }
}