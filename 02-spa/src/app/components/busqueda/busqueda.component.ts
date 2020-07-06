import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})


export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: String ;

  constructor(private _heroesService: HeroesService, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      this.termino = params['termino'];
    })
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}