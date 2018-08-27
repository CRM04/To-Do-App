import { Action } from "@ngrx/store";

export const SET_FILTRO = '[filter] Set filter';
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class setFiltro implements Action{
    readonly type = SET_FILTRO;
    constructor ( public filtro:filtrosValidos ){

    }
}

export type acciones = setFiltro;