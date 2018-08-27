import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ToggleTodo, EditarTodo, BorrarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoItem:Todo;
  chckField : FormControl;
  inputText :FormControl;
  editando: boolean;

  //Seleccion de un componente desde el template.
  @ViewChild('inputFisico') inputFisico : ElementRef;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.editando = false;
    this.chckField = new FormControl( this.todoItem.completado );
    this.inputText = new FormControl( this.todoItem.texto, Validators.required );

    this.chckField.valueChanges.subscribe( () => {
      const accion = new ToggleTodo( this.todoItem.id );
      this.store.dispatch( accion );
    })
  }

  editar(){
    this.editando = true;

    setTimeout( () => {
      this.inputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion(){
    this.editando = false;

    if( this.inputText.invalid)
      return;
    
    if(this.inputText.value === this.todoItem.texto )
      return;
    
    const accion = new EditarTodo(this.todoItem.id , this.inputText.value );
    this.store.dispatch( accion );
  }

  borrarTodo(){
    const accion = new BorrarTodo( this.todoItem.id );
    this.store.dispatch( accion );
  }

}
