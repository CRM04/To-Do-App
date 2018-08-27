import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.textInput = new FormControl('' , Validators.required)
  }

  agregarTodo(){
    if( this.textInput.invalid){
      return;
    }
    const accion = new fromTodo.AgregarToDoAction( this.textInput.value );
    this.store.dispatch( accion );
    this.textInput.setValue('');
  }

}
