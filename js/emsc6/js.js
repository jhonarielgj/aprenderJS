//Para garantizar que la página se cargue antes de ejecutar JavaScript
 //Usando JavaScript
(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        //Código JavaScript aquí...
        let equipo = [  
            {name: "David Gómez", posicion: "5"},
            {name: "Sergio Callejas", posicion: "4"},  
            {name: "Javier Rodríguez", posicion: "3"},  
            {name: "Laura Fernández", posicion: "2"},  
            {name: "Manuel Fernández", posicion: "1"}
        ]
            
        //recorremos por posición que ocupa en el array
        for (let i in equipo) {
            console.log(equipo[i]);
        }
        
        //recorremos directamente los objetos del array con OF
        for (let jugador of equipo) {
            console.log(`El jugador ${jugador.name} se encuentra en la posición ${jugador.posicion}`);
        }
    });
})();
