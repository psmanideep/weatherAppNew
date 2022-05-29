import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { SearchComponent } from './components/search/search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { EffectsModule } from '@ngrx/effects';
import * as weatherState from './store/reducers/weather.reducer';
import { WeatherEntityEffects } from './store/effects/weather.effect';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherCardComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    EffectsModule.forFeature([WeatherEntityEffects]),
    StoreModule.forFeature(
      weatherState.weatherFeatureKey,
      weatherState.weatherReducer
    ),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
