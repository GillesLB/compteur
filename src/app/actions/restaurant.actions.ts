import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';
import { RESET } from '@ngrx/store-devtools/src/actions';

export class ADD implements Action {
    readonly type = ACTIONS.RESTAURANT.ADD;
}

export class RestaurantTop implements Action {
    readonly type = ACTIONS.RESTAURANT.TOP;
}

export class Effacer implements Action {
    readonly type = ACTIONS.RESTAURANT.EFFACER;
}

export class MontrerListe implements Action {
    readonly type = ACTIONS.RESTAURANT.MONTRER_LISTE;
}

export class Vide implements Action {
    readonly type = ACTIONS.RESTAURANT.VIDE;
}
