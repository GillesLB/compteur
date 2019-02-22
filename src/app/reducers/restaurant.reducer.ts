import { Action, State } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';
import { restaurants } from 'src/app/liste-restaurants';

export interface State {
    check: boolean;
    nom: string;
    adresse: string;
    dateDerniereVisite: string;
    note: number;
    nombreVisite: number;
    nombreCommentaire: number;
    commentaire: any[];
    restaurantId: number;
}

export const initialState = {
    data: []
};

export function restaurantReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ACTIONS.RESTAURANT.MONTRER_LISTE:
            state.data = restaurants;
            return {
                ...state,
                data: state.data
            };
        case ACTIONS.RESTAURANT.ADD:
            const test = {
                check: false,
                nom: 'Ze test d\'ajout',
                adresse: '17 rue du test',
                dateDerniereVisite: '22/02/2019',
                note: 5,
                nombreVisite: 1,
                nombreCommentaire: 0,
                commentaire: [],
                restaurantId: 23
            };
            return {
                // "clonage" du state
                ...state,
                // modification de la donnée data du state
                // et ajout de la donnée (ici, test) à la fin du tableau
                data : [...state.data, test]
            };
        case ACTIONS.RESTAURANT.TOP:
            const top: any[] = [];
            for (let i = 0; i < restaurants.length; i++) {
                if (restaurants[i].note > 3) {
                    top.push(restaurants[i]);
                }
            }
            return {
                ...state,
                data: state.data = top
            };
        case ACTIONS.RESTAURANT.VIDE:
            const vide: any[] = [];
            for (let i = 0; i < restaurants.length; i++) {
                if (!(restaurants[i].note) || !(restaurants[i].nombreCommentaire)) {
                    vide.push(restaurants[i]);
                }
            }
            return {
                ...state,
                data: state.data = vide
            };
        case ACTIONS.RESTAURANT.EFFACER:
            state.data = [];
            const reinit = {
                check: false,
                nom: '',
                adresse: '',
                dateDerniereVisite: '',
                note: 0,
                nombreVisite: 0,
                nombreCommentaire: 0,
                commentaire: [],
                restaurantId: 0
            };
            return {
                ...state,
                data: [...state.data, reinit]
            };
        default:
            return state;
    }
}
