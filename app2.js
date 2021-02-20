"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
batimovil.acelerar();
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
reir(guason);
// Cree una interfaz para la siguiente funcion
function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
}
