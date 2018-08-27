import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltros from '../todo/filter/filter.accion';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( todo:Todo[], filtro: fromFiltros.filtrosValidos ):  Todo[] {
    switch ( filtro ) {
      case 'completados':
        return todo.filter( tarea => tarea.completado);
      
      case 'pendientes':
        return todo.filter( tarea => !tarea.completado);

      default:
        return todo;
    }
  }

}
