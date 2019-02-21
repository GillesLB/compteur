import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ADD, JoyeuxSerialKiller, Effacer } from 'src/app/actions/restaurant.actions';
import { initialState } from 'src/app/reducers/restaurant.reducer';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  initialState = initialState;
  restaurant$: Observable<object>;

  constructor(private store: Store<{ restaurant: object }>) {
    this.restaurant$ = store.pipe(select('restaurant'));
  }

  addRestaurant() {
    this.store.dispatch(new ADD());
  }

  effacer() {
    this.store.dispatch(new Effacer());
  }

  ngOnInit() {
  }

}
