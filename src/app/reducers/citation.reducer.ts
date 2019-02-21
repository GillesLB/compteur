import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export const initialState = '...';

export function citationReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ACTIONS.CITATION.PLATON:
            return state = 'La victoire sur soi est la plus grande des victoires. (Platon)';
        case ACTIONS.CITATION.SPINOZA:
            return state = 'Ne pas railler, ne pas déplorer, ne pas maudire, mais comprendre. (B Spinoza)';
        case ACTIONS.CITATION.JUNG:
            return state = 'Je ne suis pas ce qui m’est arrivé, je suis ce que je choisis de devenir. (CG Jung)';
        case ACTIONS.CITATION.ALEATOIRE.DALAI_LAMA:
            return state = 'L\'Amour et la compassion sont des nécessités, pas un luxe. (le XIVème Dalaï Lama)';
        case ACTIONS.CITATION.ALEATOIRE.GANDHI:
            return state = 'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre. (Gandhi)';
        case ACTIONS.CITATION.ALEATOIRE.COLUCHE:
            return state = 'Je suis capable du meilleur et du pire. Mais, dans le pire, c\'est moi le meilleur. (Coluche)';
        case ACTIONS.CITATION.EFFACER:
            return state = initialState;
        default:
            return state;
    }
}
