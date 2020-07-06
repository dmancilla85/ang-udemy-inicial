/* 1. Tipos de variables */ 
let mensaje:string = "hola";
let numero:number = 123;
let flag:boolean = true;
let hoy:Date = new Date();

hoy = new Date('2020-10-21');

let cualquiera:any;

cualquiera = mensaje;
cualquiera = flag;

let spiderman = {
    nombre: "Peter",
    edad: 20
};

const OPTION:string = "alegre";

if(true){
    let mensaje = "chau";
}

console.log(mensaje + " " + OPTION + " día: " + hoy);


/* 2. Templates literales
 * - Necesita los back ticks (`)
 * - Se puede agregar code chunks entre los corchetes. */
let templ:string = 
`Hola, ${ mensaje } ${ cualquiera }
Adiós!`;


/* 3. Funciones y tipos de argumentos
 * i. Obligatorio
 * ii. Opcional
 * iii. Adicional (?) */
function activar({ quien, objeto="batiseñal", momento }: { quien: string; objeto?: string; momento?: string; }){
        
        let mensaje:string;
        
        if( momento ){
            mensaje = `${quien} activó la ${objeto} en la ${momento}.`;
        } else {
            mensaje = `${quien} activó la ${objeto}.`;
        }
        
        console.log(mensaje);
}

activar({ quien: newFunction() });

function newFunction(): string {
    return "Gordon";
}

/* 4. Funciones flecha o lambda
 * Antes de las funciones flecha, cada nueva función definía su propio valor de 
 * this (un nuevo objeto en el caso de un constructor, undefined en llamadas a 
 * funciones en modo estricto, el objeto contextual si la función se llama como 
 * un "método de un objeto", etc.). Lo cual resultaba molesto cuando se intentaba 
 * aplicar programación orientada a objetos. */

 //Estas dos funciones son iguales 
let miFuncion = function (a:number, b:number){
    return a + b;
}

let miFuncionF = (a:number, b:number) => {
    a + b;
}

// Una aplicación de las funciones flecha
let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout( 
            () => console.log( this.nombre + " smash!!"), 
        500);
    }
}

hulk.smash();

 /** 5. Desestructuración de objetos 
  * Extraer miembros como variables locales.
  */ 

  let avenger = {
      nombre: "Steve",
      clave: "Capitán América",
      poder: "Droga"
  }

  let {poder:pow1, nombre:name1, clave:key} = avenger;

  console.log(name1, key, pow1);

  let avengers:string[] = ["Thor", "Hulk", "Black Widow"];
  let [thor, hulky, widow] = avengers;

  console.log(thor, hulky, widow);


/** 6. Promesas
 *  desc here
 */ 
 let prom1 = new Promise( function(resolve, reject) {
    setTimeout( () => {
        console.log("Promesa terminada");
        
        // Termina bien
        resolve();

        // Termina mal
        //reject();
    }, 1500);
 })

console.log("Paso 1");

 prom1.then( function(){  
     console.log("Ejecutarme cuando se termine bien!");
 }, function(){
     console.error("Ejecutar si algo sale mal.");
 } );

 console.log("Paso 2");

/** 7. Interfaces 
 * desc here
 */

 // Interface Xmen
 interface Xmen{
     nombre:string,
     poder:string
 }

 // Herencia
 let wolverine:Xmen = {
     nombre: "Wolverine",
     poder: "Regeneración"
 }

 function enviarMision(xmen: Xmen){
     console.log("Enviando a: " + xmen.nombre);
 }

 enviarMision(wolverine);
 
/** 
 * 8. Clases 
 * desc here
 */

 class Avenger{
     nombre:string = "Sin nombre";
     equipo:string = undefined;
     nombreReal:string = undefined;

     puedePelear:boolean = false;
     peleasGanadas:number = 0;

     constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;

         console.log("Construido.");
     }
 }

 let antman:Avenger = new Avenger("Antman", "Cap", "Scott Lang");
 console.log(antman);

 /**
  * 9. Decorador de clases 
  */

function consola( constructor:Function ){
    console.log( constructor );
}

@consola 
class Villano{
      constructor(public nombre:string){

      }
    }