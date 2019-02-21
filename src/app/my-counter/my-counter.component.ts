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

  class: string;
  cacher = 'cacher';
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
    this.class = '';
    this.cacher = 'cacher';
    this.class = '';
  }

  color() {
    this.store.dispatch(new Color());
    this.class = 'color';
  }

  afficher() {
    this.store.dispatch(new Afficher());
    this.cacher = '';
  }

  ngOnInit() {
  }

}
