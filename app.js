"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar('logan');
}
var wolverine = {
    nombre: 'wolverine',
    poder: 'Regeneracion',
    regenerar: function (x) {
        console.log('se ha regenerado ' + x);
    }
};
enviarMision(wolverine);
var Mutante = /** @class */ (function () {
    function Mutante(nombre) {
        this.nombre = nombre;
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return Mutante;
}());
var wolv = new Mutante('wolverine');
wolv.regenerar('wolv');
var sumar;
sumar = function (a, b) {
    return a + b;
};
console.log(sumar(1, 2));
