import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ToggleAll } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado:boolean;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.completado = false;
  }

  filtro(){
    this.completado = !this.completado;
    const accion = new ToggleAll( this.completado );
    this.store.dispatch(accion);
  }
}
