import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';
import { restaurants } from 'src/app/liste-restaurants';

export const initialState = {
    data : ['1er restaurant', '2eme restaurant']
};

export function restaurantReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ACTIONS.RESTAURANT.ADD:
            return {
                // "clonage" du state
                ...state,
                // modification de la donnée data du state
                // et ajout de' "3ème restaurant" dans le tableau
                data : [...state.data, '3eme restaurant']
            };
        default:
            return state;
    }
}
