import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export interface State {
    data: number;
    color: string;
    afficher: string;
}

export const initialState: State = {
    data: 0,
    color: '',
    afficher: 'cacher'
};

export function counterReducer(state = initialState, action: Action): State {
    switch (action.type) {
        case ACTIONS.COMPTEUR.INCREMENTER:
            return {
                ...state,
                data: state.data += 1
            };
        case ACTIONS.COMPTEUR.DECREMENTER:
            return {
                ...state,
                data: state.data -= 1
            };
        case ACTIONS.COMPTEUR.EFFACER:
            return {
                ...state,
                data: state.data = 0,
                color: state.color = '',
                afficher: state.afficher = 'cacher'
            };
        case ACTIONS.COMPTEUR.COULEUR:
            return {
            ...state,
            color: state.color = 'rouge'
            };
        case ACTIONS.COMPTEUR.AFFICHER:
            return {
            ...state,
            afficher: state.afficher = ''
            };
        default:
            return state;
    }
}
