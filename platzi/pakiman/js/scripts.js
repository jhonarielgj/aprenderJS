//array asociativo
let imagenes = [];
imagenes["Cauchin"] = "img/vaca.png";
imagenes["Pocacho"] = "img/pollo.png";
imagenes["Tocinauro"] = "img/cerdo.png";

/*var cauchin = new Pakiman("Cauchin", 100, 30);
var pocacho = new Pakiman("Pocacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
pocacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();*/

//Para reemplazar lo comentado anterior y automatizar el mostrar
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pocacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
//IN itera con el INDICE
/*for (let p in coleccion) {
    coleccion[p].mostrar();
}*/
//OF itera sobre el OBJETO
for (let p in coleccion) {
    coleccion[p].mostrar();
}
