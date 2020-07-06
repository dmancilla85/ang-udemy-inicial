import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent implements OnInit {
  usuario: Record<string, unknown> = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    genero: null
  };

  paises: Record<string, any> = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[ Seleccione País]',
        codigo: null
      });
    });
  }

  guardar(forma: NgForm): void {
    if (forma.invalid) {
      forma.form.markAllAsTouched();
      return;
    }
  }
}
