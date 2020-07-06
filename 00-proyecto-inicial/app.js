var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* 1. Tipos de variables */
var mensaje = "hola";
var numero = 123;
var flag = true;
var hoy = new Date();
hoy = new Date('2020-10-21');
var cualquiera;
cualquiera = mensaje;
cualquiera = flag;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
var OPTION = "alegre";
if (true) {
    var mensaje_1 = "chau";
}
console.log(mensaje + " " + OPTION + " día: " + hoy);
/* 2. Templates literales
 * - Necesita los back ticks (`)
 * - Se puede agregar code chunks entre los corchetes. */
var templ = "Hola, " + mensaje + " " + cualquiera + "\nAdi\u00F3s!";
/* 3. Funciones y tipos de argumentos
 * i. Obligatorio
 * ii. Opcional
 * iii. Adicional (?) */
function activar(_a) {
    var quien = _a.quien, _b = _a.objeto, objeto = _b === void 0 ? "batiseñal" : _b, momento = _a.momento;
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento + ".";
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto + ".";
    }
    console.log(mensaje);
}
activar({ quien: newFunction() });
function newFunction() {
    return "Gordon";
}
/* 4. Funciones flecha o lambda
 * Antes de las funciones flecha, cada nueva función definía su propio valor de
 * this (un nuevo objeto en el caso de un constructor, undefined en llamadas a
 * funciones en modo estricto, el objeto contextual si la función se llama como
 * un "método de un objeto", etc.). Lo cual resultaba molesto cuando se intentaba
 * aplicar programación orientada a objetos. */
//Estas dos funciones son iguales 
var miFuncion = function (a, b) {
    return a + b;
};
var miFuncionF = function (a, b) {
    a + b;
};
// Una aplicación de las funciones flecha
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 500);
    }
};
hulk.smash();
/** 5. Desestructuración de objetos
 * Extraer miembros como variables locales.
 */
var avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga"
};
var pow1 = avenger.poder, name1 = avenger.nombre, key = avenger.clave;
console.log(name1, key, pow1);
var avengers = ["Thor", "Hulk", "Black Widow"];
var thor = avengers[0], hulky = avengers[1], widow = avengers[2];
console.log(thor, hulky, widow);
/** 6. Promesas
 *  desc here
 */
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        // Termina bien
        resolve();
        // Termina mal
        //reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.error("Ejecutar si algo sale mal.");
});
console.log("Paso 2");
// Herencia
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
enviarMision(wolverine);
/**
 * 8. Clases
 * desc here
 */
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log("Construido.");
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang");
console.log(antman);
/**
 * 9. Decorador de clases
 */
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
