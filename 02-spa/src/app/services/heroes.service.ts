import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      big: "assets/img/aquaman.jpg",
      casa_img: "assets/img/dc.png",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      big: "assets/img/batman.jpg",
      casa_img: "assets/img/dc.png",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      big: "assets/img/daredevil.jpg",
      casa_img: "assets/img/marvel.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      big: "assets/img/hulk.jpg",
      casa_img: "assets/img/marvel.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      big: "assets/img/linterna-verde.jpg",
      casa_img: "assets/img/dc.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      big: "assets/img/spiderman.jpg",
      casa_img: "assets/img/marvel.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      big: "assets/img/wolverine.jpg",
      casa_img: "assets/img/marvel.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    },
    {
      nombre: "Cazador",
      bio: "El Cazador desciende de una familia de feroces reitres alemanes que se ganaban la vida como mercenarios. Su abuelo era uno de los generales y torturadores al servicio de Vlad el empalador. Su padre lo engendró durante un viaje a América, siendo su madre una mujer indígena de una tribu caníbal, y llevó al bebé con él de vuelta a Alemania. La llegada del Cazador a Argentina se remonta a 1530 cuando, siendo todavía un simple mortal, llega al Río de la Plata en una expedición junto a Juan Díaz de Solís en busca de tesoros. Después de ocasionar una serie de disturbios en los fortines es desterrado junto a una banda de rebeldes acusados de masacres y canibalismo, adquiriendo el nombre de El Cazador de Almas. Durante semanas se dedica a destruir y saquear las tolderías vecinas para sobrevivir, al mismo tiempo que tortura despiadadamente a los indígenas que se cruzan en su camino. Las correrías del Cazador llegan a su fin cuando cae prisionero de una tribu de chamanes que queman en su frente la cruz invertida (la cruz cristiana que tanto defendió) y fuerzan espíritus demoníacos a poseerlo, afectándolo con lo que consideran el mayor castigo para un ser vivo: la Inmortalidad. El Cazador escapa, mata y devora a sus propios secuaces, y se arroja de un acantilado para huir de los demonios que lo atormentan solo para descubrir que no ha muerto al caer desde semejante altura. A partir de este momento el Cazador morirá muchas veces frente a enemigos que lo superan en fuerza, pero resucitará un par de horas después. Con los años el Cazador tomará como residencia una iglesia abandonada en las afueras de Buenos Aires mediante ocupación ilegal (cada tanto aparecen curas furiosos que tratan de echarlo). Antes de ello puede decirse de su vida que viajó por todo el mundo, y combatió en distintas guerras (Primera y Segunda Guerra Mundial, en Corea, en Vietnam, en las Malvinas) siempre del lado perdedor. Una vez que comienzan sus aventuras en el cómic se enfrenta a distintos personajes ficticios como el Hombre Lobo, Drácula, extraterrestres y toda clase de demonios. Entre los demonios sus principales enemigos son Balrog y sobre todo Melkor, el Señor De La Oscuridad que fue desterrado de su reino y busca apoderarse de la Tierra cada tanto.",
      img: "assets/img/cazador.jpg",
      big: "assets/img/cazador2.jpg",
      casa_img: "assets/img/marvel.png",
      aparicion: "1992-10-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar.");
    for (let i = 0; i < this.heroes.length; i ++) {
      let heroe = this.heroes[i];
      heroe.idx = i;
    }

  }

  getHeroes() {
    return this.heroes;
  }

  getHeroe(id: string) {
    return this.heroes[id];
  }

  buscarHeroes(termino: string) {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i ++) {
      
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }

}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  big: string;
  aparicion: string,
  casa: string;
  casa_img?: string;
  idx?:number;
}