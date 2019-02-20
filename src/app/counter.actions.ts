import { Action } from '@ngrx/store';

export enum ActionTypes {
    Increment = '[Counter Component] Increment',
    Decrement = '[Counter Component] Decrement',
    Reset = '[Counter Component] Reset',
    Color = '[Counter Component] Color',
    Afficher = '[Counter Component] Afficher'
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export class Color implements Action {
    readonly type = ActionTypes.Color;
}

export class Afficher implements Action {
    readonly type = ActionTypes.Afficher;
}
