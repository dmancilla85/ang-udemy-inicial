import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Fernando";
  nombre2: string = "ferNando alberto heRRera jimenez";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  a: number = 0.234;
  salario: number = 1234.5;
  heroe = {
    nombre: "Wolverine",
    clave: "Logan",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19",
      estado: "New York"
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  })

  fecha: Date = new Date();
  video: string = "79ajqramV1w";
  activar: boolean = true;

}
