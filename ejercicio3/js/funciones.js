
/*//clase Gato
function Gato(nombre, edad, peso) {
        //propiedades
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        //métodos
        this.correr = function () {
                document.write("El gato " + nombre + " corre <br>");
        }
};

//Objetos (instancias de la clase)
var gato1 = new Gato("mitens", 2, 3);
var gato2 = new Gato("peter", 6, 4);

document.write(gato1.nombre+"<br>");
document.write(gato2.peso+"<br>");
gato1.correr();
gato2.correr();*/

//-----------------------------
//Nueva forma de hacerlo
class Gato{
        constructor(nombre, edad, peso){
                this.nombre = nombre;
                this.edad = edad;
                this.peso = peso;
        }
        correr(){
                document.write("El gato " + this.nombre + " corre <br>");
        }
}

var gato1 = new Gato("mitens", 2, 3);
var gato2 = new Gato("peter", 6, 4);

document.write(gato1.nombre+"<br>");
document.write(gato2.peso+"<br>");
gato1.correr();
gato2.correr();

document.write("<hr>");
//-----------------------------------
class Animal{
        constructor(tipo, raza){
                this.tipo = tipo;
                this.raza = raza;
        }

}

//La clase domésticos hereda algo de animales
class Domesticos extends Animal {
        constructor(tipo, nombre, edad, peso) {
                super(tipo)
                this.uno = nombre;
                this.dos = edad;
                this.tres = peso;
        }

}

var animal1 = new Domesticos("Hogar","Mitens","2","3");
var animal2 = new Domesticos("Salvaje","Tigre","4","30");

var tipoAnimal = new Animal("Salvaje", "pura");

document.write(animal1.tipo+"<br>");
document.write(animal2.tres+"<br>");
document.write(tipoAnimal.tipo+"<br>");