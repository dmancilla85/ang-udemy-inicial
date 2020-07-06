import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false // Si es puro solo se llama cuando la acción del
              // ciclo de cambios se llama desde el mismo comp.
})

export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === completada);
  }

}
