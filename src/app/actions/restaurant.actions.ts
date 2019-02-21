import { Action } from '@ngrx/store';

import { ACTIONS } from 'src/app/actions/ACTIONS';

export class ADD implements Action {
    readonly type = ACTIONS.RESTAURANT.ADD;
}

export class JoyeuxSerialKiller implements Action {
    readonly type = ACTIONS.RESTAURANT.JOYEUX_SERIAL_KILLER;
}

export class Effacer implements Action {
    readonly type = ACTIONS.RESTAURANT.EFFACER;
}

export class MontrerListe implements Action {
    readonly type = ACTIONS.RESTAURANT.MONTRER_LISTE;
}
