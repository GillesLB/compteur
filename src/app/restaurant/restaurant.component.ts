import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ADD, Effacer, MontrerListe, RestaurantTop, Vide } from 'src/app/actions/restaurant.actions';
import { initialState } from 'src/app/reducers/restaurant.reducer';
import { restaurants } from 'src/app/liste-restaurants';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  nombreRestaurantTotal = 0;
  nombreRestaurantParPage = [];
  pageEnCours = 1;
  pageMax = 0;
  indexPage: number[] = [];
  finBoucle = 0;
  restaurantsVisibles = [];

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

  top() {
    this.store.dispatch(new RestaurantTop());
  }

  vide() {
    this.store.dispatch(new Vide());
  }

  montrerListe() {
    this.store.dispatch(new MontrerListe());
  }

  pagePrecedente() {
    this.pageEnCours -= 1;
    this.restaurantsVisibles = [];
    for (let i = (this.pageEnCours * 5) - 5; i < this.pageEnCours * 5; i++) {
      this.restaurantsVisibles.push(restaurants[i]);
    }
  }

  pageSuivante() {
    this.pageEnCours += 1;
    this.restaurantsVisibles = [];
    if (this.pageEnCours >= this.pageMax) {
      this.finBoucle = this.nombreRestaurantTotal;
    } else {
      this.finBoucle = this.pageEnCours * 5;
    }
    for (let i = (this.pageEnCours * 5) - 5; i < this.finBoucle; i++) {
      this.restaurantsVisibles.push(restaurants[i]);
    }
  }

  ngOnInit() {
    this.nombreRestaurantTotal = restaurants.length;
    this.pageMax = Math.ceil(this.nombreRestaurantTotal / 5);
    for (let i = 0; i < 5; i++) {
      this.restaurantsVisibles.push(restaurants[i]);
    }
    }

}
