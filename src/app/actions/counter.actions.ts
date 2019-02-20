import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export class Increment implements Action {
    readonly type = ACTIONS.COMPTEUR.INCREMENTER;
}

export class Decrement implements Action {
    readonly type = ACTIONS.COMPTEUR.DECREMENTER;
}

export class Reset implements Action {
    readonly type = ACTIONS.COMPTEUR.EFFACER;
}

export class Color implements Action {
    readonly type = ACTIONS.COMPTEUR.COULEUR;
}

export class Afficher implements Action {
    readonly type = ACTIONS.COMPTEUR.AFFICHER;
}
