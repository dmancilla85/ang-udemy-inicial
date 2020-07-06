import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList, { static: true }) ionLista: IonList;
  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController) {

  }

  ngOnInit() { }

  seleccionarLista(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async cambiarNombreLista(lista: Lista) {

    const alert = await this.alertController.create({
      header: 'Cambiar título',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelar");
            this.ionLista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            } else {
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.ionLista.closeSlidingItems();
            }


          }
        }

      ]
    });

    alert.present();
  }

}
