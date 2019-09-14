let array = [];

//AGREGAR Y ELIMINAR ELEMENTOS
//Agregar elementos al final con arreglo.push(elementos);
array.push(10);
console.log(array);
array.push(20,30,40,50);
console.log(array);
//Eliminar el ultimo con arreglo.pop();
array.pop();
console.log(array);
//Eliminar el primer elemento con arreglo.shif();
array.shift();
console.log(array);
//Agregar al inicio elementos con arreglo.unshift(elementos); 
array.unshift(1,2,3);
console.log(array);

//RECORRER ARREGLOS
let array2 = [10, 20, 30, 40, 50];
//For normal, acepta break y continue
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (element == 20) break;
    console.log('Elemento: ', element);
}
//forEach recorre todo el arreglo, no admite break y continue
array2.forEach(element => {
    console.log('Elemento: ', element);
});
// for in. Acepta break y continue, muestra todos los elementos del arreglo
// incluyedo arreglo2.nombre. Este es el único que lo muestra
array2.nombre = 'Jhon';
for (const i in array2) {
    const element = array2[i];
    console.log('Elemento: ', element);
}
// 


