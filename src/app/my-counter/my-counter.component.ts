import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Increment, Decrement, Reset, Color, Afficher } from '../actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<any>;

  constructor(
    private store: Store<{ count: any }>,
    ) {
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
  }

  couleur() {
    this.store.dispatch(new Color());
  }

  afficher() {
    this.store.dispatch(new Afficher());
  }

  ngOnInit() {
    console.log('S : ', this.store)
  }

}
