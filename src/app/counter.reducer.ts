import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;
        case ActionTypes.Decrement:
            return state - 1;
        case ActionTypes.Reset:
            return state = 0;
        case ActionTypes.Color:
            return state = 999;
        case ActionTypes.Afficher:
            return state = 108;
        default:
            return state;
    }
}
