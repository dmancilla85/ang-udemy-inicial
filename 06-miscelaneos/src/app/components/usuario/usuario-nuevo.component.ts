import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    // Recibir parámetros del objeto padre
    this.router.parent.params.subscribe(prm => { console.log(prm); })
  }

  ngOnInit() {
  }

}
