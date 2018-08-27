import { Todo } from "./todo/model/todo.model";
import * as fromTodo  from "./todo/todo.reducer";
import * as fromFiltro from "./todo/filter/filter.reducer";
import { ActionReducerMap } from "@ngrx/store";
import * as fromFiltroActions from './todo/filter/filter.accion';

export interface AppState{
    todos:Todo[];
    filtro:fromFiltroActions.filtrosValidos;
}

export const AppReducers : ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}