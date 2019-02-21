import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { citationReducer } from 'src/app/reducers/citation.reducer';
import { counterReducer } from 'src/app/reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CitationComponent } from './citation/citation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { restaurantReducer } from './reducers/restaurant.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CitationComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      citation: citationReducer,
      count: counterReducer,
    }),
    StoreModule.forFeature('restaurant', restaurantReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
