import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export const initialState = {
    citation : '...'
};

export function citationReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ACTIONS.CITATION.PLATON:
            return {
                ...state,
                state: state.citation = 'La victoire sur soi est la plus grande des victoires. (Platon)'
            };
        case ACTIONS.CITATION.SPINOZA:
            return {
                ...state,
                state: state.citation = 'Ne pas railler, ne pas déplorer, ne pas maudire, mais comprendre. (B Spinoza)'
            };
        case ACTIONS.CITATION.JUNG:
            return {
                ...state,
                state: state.citation = 'Je ne suis pas ce qui m’est arrivé, je suis ce que je choisis de devenir. (CG Jung)'
            };
        case ACTIONS.CITATION.ALEATOIRE.DALAI_LAMA:
            return {
                ...state,
                state: state.citation = 'L\'Amour et la compassion sont des nécessités, pas un luxe. (le XIVème Dalaï Lama)'
            };
        case ACTIONS.CITATION.ALEATOIRE.GANDHI:
            return {
                ...state,
                state: state.citation = 'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre. (Gandhi)'
            };
        case ACTIONS.CITATION.ALEATOIRE.COLUCHE:
            return {
                ...state,
                state: state.citation = 'Je suis capable du meilleur et du pire. Mais, dans le pire, c\'est moi le meilleur. (Coluche)'
            };
        case ACTIONS.CITATION.EFFACER:
            return {
                ...state,
                state: state.citation = '...'
            };
        default:
            return state;
    }
}
