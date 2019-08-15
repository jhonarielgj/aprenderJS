class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    static definicion() {  //sólo se accede desde la clase Persona, no desde una instancia como jhon
        console.log("Una persona es un ser humano");
    }
}

jhon = new Persona("Jhon","49");
jhon.saludar();
Persona.definicion();

class Desarrollador extends Persona{
    constructor (nombre, edad, tipo) {
        super(nombre, edad); //trae atributos del padre (Persona)
        this.tipo = tipo;
    }

    saludoDesarrollador() {
        super.saludar();  //Cuando se tiene un método con el mismo nombre, acá hace referencia a Persona
        console.log(`Soy un desarrolldor ${this.tipo}`);
    }

    //saludar(){  //Método de Desarrollador con el mismo nombre del de Persona
      //  console.log("Hola desde la sub-clase");
  //  }
}

desarrolladorJhon = new Desarrollador("Ariel",49,"FullStack");
desarrolladorJhon.saludar();
desarrolladorJhon.saludoDesarrollador();

//con prototype puedo acceder a un método de Persona desde Desarrollador
//Desarrollador.prototype.saludar();
//pero hay que pasarle los parámetros, se usa bind
Desarrollador.prototype.saludar.bind({
    nombre: "Gomez",
    edad: 49
})();

//Puedo crear un método o un atributo a una clase
Persona.prototype.nacionalidad = "Colombia";
Persona.prototype.despedir = function () {
    console.log("Adios");
}
//Se crearon en la clase Persona y la clase Desarrollador los hereda 
desarrolladorJhon.despedir();
console.log(desarrolladorJhon.nacionalidad);
