import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export class Platon implements Action {
    readonly type = ACTIONS.CITATION.PLATON;
}

export class Jung implements Action {
    readonly type = ACTIONS.CITATION.JUNG;
}

export class Spinoza implements Action {
    readonly type = ACTIONS.CITATION.SPINOZA;
}

export class DalaiLama implements Action {
    readonly type = ACTIONS.CITATION.ALEATOIRE.DALAI_LAMA;
}

export class Gandhi implements Action {
    readonly type = ACTIONS.CITATION.ALEATOIRE.GANDHI;
}

export class Coluche implements Action {
    readonly type = ACTIONS.CITATION.ALEATOIRE.COLUCHE;
}

export class Effacer implements Action {
    readonly type = ACTIONS.CITATION.EFFACER;
}
