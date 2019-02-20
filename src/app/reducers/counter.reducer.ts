import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ACTIONS.COMPTEUR.INCREMENTER:
            return state + 1;
        case ACTIONS.COMPTEUR.DECREMENTER:
            return state - 1;
        case ACTIONS.COMPTEUR.EFFACER:
            return state = 0;
        case ACTIONS.COMPTEUR.COULEUR:
            return state = 999;
        case ACTIONS.COMPTEUR.AFFICHER:
            return state = 108;
        default:
            return state;
    }
}
