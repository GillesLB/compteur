import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Platon, Jung, Spinoza, DalaiLama, Gandhi, Coluche, Effacer } from '../actions/citation.actions';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent implements OnInit {

  choix: number;
  citation$: Observable<string>;

  constructor(private store: Store<{ citation: string }>) {
    this.citation$ = store.pipe(select('citation'));
  }

  platon() {
    this.store.dispatch(new Platon());
  }

  jung() {
    this.store.dispatch(new Jung());
  }

  spinoza() {
    this.store.dispatch(new Spinoza());
  }

  entierAleatoire(min, max) {
    this.choix = Math.floor(Math.random() * (max - min)) + min;
    return this.choix;
  }

  aleatoire() {
    this.entierAleatoire(0, 3);
    console.log(this.choix);
    switch (this.choix) {
      case (0):
        return this.store.dispatch(new DalaiLama());
      case (1):
        return this.store.dispatch(new Gandhi());
      default:
        return this.store.dispatch(new Coluche());
    }
  }

  effacer() {
    this.store.dispatch(new Effacer());
  }

  ngOnInit() {
  }

}
