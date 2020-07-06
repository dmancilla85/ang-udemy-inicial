import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent {

  alerta: string;
  propiedades: Object;
  loading: boolean = false;

  constructor() {
    this.alerta = "alert-danger";
    this.propiedades = {
      danger: true
    };
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000)
  }

}
