import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Terminar lo que comienzo');
const todo2 = new Todo('Buscar algo más que comenzar..');
const todo3 = new Todo('Que otra cosa tenia que hacer ?..');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const toDo = new Todo(action.payload);
            //Clona el arreglo actual y le añade el siguiente, esto para crear un nuevo arreglo y no pasarlo por referencia.
            return [...state, toDo];

        case fromTodo.TOGGLE_TODO:
            ///necesitamos devolver un nuevo arreglo para tener el seguimiento del estado por ello ocupamos map
            console.log( action.id )
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.nuevoTexto
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todoItem => todoItem.id != action.id);

        case fromTodo.TOGLLE_ALL_TODO:
            return state.map(todoItem => {
                return {
                    ...todoItem,
                    completado : action.completado
                };
            });

        case fromTodo.LIMPIAR_COMPLETADOS:
            return state.filter( toDoItem => !toDoItem.completado);

        default:
            return state;
    }
}