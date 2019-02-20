import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { citationReducer } from 'src/app/reducers/citation.reducer';
import { counterReducer } from 'src/app/reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CitationComponent } from './citation/citation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CitationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({citation: citationReducer, count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
