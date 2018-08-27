import { Component, OnInit } from '@angular/core';
import * as fromFiltrosV from '../filter/filter.accion';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { LimpiarComp } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValid :fromFiltrosV.filtrosValidos[] = ['todos' , 'completados' , 'pendientes'];
  filtroActual :fromFiltrosV.filtrosValidos;
  pendientes:number;


  constructor(private store:Store<AppState>) { }

  ngOnInit() {
      this.store.subscribe(state => {
        this.filtroActual = state.filtro;
        this.ContarPendientes(state.todos);
      })
  }

  cambiarFiltro( filtro:fromFiltrosV.filtrosValidos ){
    const accion = new fromFiltrosV.setFiltro( filtro );  
    this.store.dispatch(accion);
  }

  ContarPendientes(todoList: Todo[]){
    this.pendientes = todoList.filter ( item => !item.completado ).length;
  }


  limpiarCompletados(){
    const accion = new LimpiarComp();
    this.store.dispatch(accion);
  }

}
