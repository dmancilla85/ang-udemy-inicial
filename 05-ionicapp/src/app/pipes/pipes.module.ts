import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtrocompletado.pipe';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [
    FiltroCompletadoPipe
  ]
})
export class PipesModule { }
