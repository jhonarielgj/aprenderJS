//funcion que garantiza que la página se cargó
window.addEventListener("load", function(){  
//Desupués deben ir todo el código js
    function mensaje() {
        alert('Has hecho click');
    }
    //-----------------------
    //Otra forma de llamar un evento de un objeto html
    //y ejecutar una funcion en un eveto del mismo
    let eventoClick = document.querySelector(".boton");
    //En el primer parámetro va el evento sin el prefijo ON de html
    //onclick -> click, onmouseover -> mouseover, etc
    //para video está play(reproducir), ended(termina el video), seeking(adelantar o retroceder video) 
    //Después se crea una función anónima que tiene las instrucciones a ejecutar
    eventoClick.addEventListener("click", 
        function() {
        alert("Hizo click con otro método");
        }
    );
    eventoClick.addEventListener("mouseover", function() {
       // alert("Está sobre el botón");
    });
    eventoClick.addEventListener("mouseout", function() {
       // alert("Salió del botón");
    });
    //----------------------------
    //Para identificar acciones con el teclado, 
    //se puede usar keydown, keypress o keyup
    window.addEventListener("keydown", function() {
        // alert(event.keyCode); //muestra el código de la tecla presionada
        // alert(String.fromCharCode(event.keyCode)); //muestra la tecla presionada
    });
    //let tiempo = setInterval(function(){document.write('Texto ejemplo <br>')},2000); 
    //Repite la acción cada vez que pasa el tiempo definido
    //setTimeout(function(){document.write("Otro texto")},3000); 
    //Espera para ejecutar la acción el tiempo definido
    //setInterval(accion,tiempo) y seTimeout(accion,tiempo)
    //----------------------------------------------
    //Tipos de ventana de mensaje: altert,confirm,propmt
    /*let a = confirm("Ayuda"); 
    if (a) {
        this.alert("Si")
    } else {
        this.alert("No")
    }*/
})
