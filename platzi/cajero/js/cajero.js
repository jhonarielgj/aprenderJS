class Billete {
    constructor (vr,cant) {
        this.valor = vr;
        this.cantidad = cant;
    }
}

let entregarDinero = () => {
    dinero = parseInt(document.getElementById("dinero").value);
    dineroSolicitado = parseInt(dinero);
    dineroEntregado = dineroSolicitado;
    for (var bi of caja) {
        if (dineroSolicitado > 0) {
            div = Math.floor(dineroSolicitado / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            for (let biEnt of caja) {
                if (biEnt.valor == bi.valor) {
                    biEnt.cantidad -= papeles;
                }
            }
            dineroSolicitado -= (bi.valor * papeles);
        }
    }
    if (dineroSolicitado > 0) {
        alerta.innerHTML += "Fondos insuficientes o valor no válido<br>";
    } else {
        alerta.innerHTML += "Billetes para valor " + dineroEntregado + ": <br>";
        for (let ent of entregado) {
            if (ent.cantidad > 0) {
                alerta.innerHTML += ent.cantidad + " billetes de " + ent.valor + "<br>";
            }
        }
        alerta.innerHTML += "<hr>";
        entregado = []; //limpiar arreglo
    }
    dinero.value = 0;
}

let caja = [];
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 2));
let entregado = [];
let dinero = 0;
let dineroEntregado = 0;
let dineroSolicitado = 0;
let div = 0;
let papeles = 0;
const d = document.getElementById("extraer");
d.addEventListener("click", entregarDinero);
const alerta = document.getElementById("mensaje");
