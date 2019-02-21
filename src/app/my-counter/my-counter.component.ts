import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Increment, Decrement, Reset, Color, Afficher } from '../actions/counter.actions';
import { Effacer } from '../actions/restaurant.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  color$: Observable<string>;
  cacher$: Observable<string>;


  constructor(
    private store: Store<{ count: number }>,
    private color: Store<{ color: string }>,
    ) {
    this.count$ = store.pipe(select('count'));
    this.color$ = store.pipe(select('color'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  couleur() {
    this.store.dispatch(new Color());
  }

  afficher() {
    this.store.dispatch(new Afficher());
  }

  ngOnInit() {
  }

}
