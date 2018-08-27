import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[ToDo] = Agregar';
export const TOGGLE_TODO = '[ToDo] = Toggle ';
export const EDITAR_TODO = '[ToDo] = Editar';
export const BORRAR_TODO = '[ToDo] = Borrar';
export const TOGLLE_ALL_TODO = '[ToDo] = Toogle All';
export const LIMPIAR_COMPLETADOS = '[ToDo] Limpiar Completados';

export class AgregarToDoAction implements Action{
    readonly type = AGREGAR_TODO;

    constructor( public payload:string ){

    }

}

export class ToggleTodo implements Action{
    readonly type = TOGGLE_TODO;

    constructor( public id:number ){

    }
}

export class EditarTodo implements Action{
    readonly type = EDITAR_TODO;
    constructor( public id:number, public nuevoTexto:string){

    }
}

export class BorrarTodo implements Action{
    readonly type = BORRAR_TODO;
    constructor( public id:number ){

    }
}

export class ToggleAll implements Action{
    readonly type = TOGLLE_ALL_TODO;
    constructor ( public completado:boolean ){}
}

export class LimpiarComp implements Action{
    readonly type = LIMPIAR_COMPLETADOS;
}

export type Acciones = AgregarToDoAction | ToggleTodo | EditarTodo | BorrarTodo | ToggleAll | LimpiarComp; 