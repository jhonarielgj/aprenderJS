let dias = ["lunes", "martes", "miercoles", "jueves", "martes"]

//for in
for (const i in dias) {
        document.write(dias[i]+"</br>");
};

//for
document.write("<hr>")

for (let i = 0; i < dias.length; i++) {
    const element = dias[i];
    document.write(element + "<br>");
};

document.write("<hr>")

//for each
dias.forEach(
    (dos, i) => { 
        document.write(i + " - " + dos + "<br>")    
});

document.write("<hr>")

//buscar con find
var buscar = dias.find (encontrado => encontrado=="martes");
document.write(buscar);

document.write("<hr>")

//buscar el índice con findIndex
var buscar = dias.findIndex (encontrado => encontrado=="martes");
document.write(buscar);

document.write("<hr>")

//filter para devolver todos los resultados, ya que find devuelve el primero
var buscar = dias.filter (encontrado => encontrado=="martes");
document.write(buscar);

