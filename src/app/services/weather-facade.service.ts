import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';
import * as searchAction from '../store/actions/search.action';
import * as weatherSelector from '../store/selectors/weather.selector';

@Injectable({
  providedIn: 'root',
})
export class WeatherFacadeService {
  constructor(private store: Store<State>) {}

  setLocation(location: string) {
    this.store.dispatch(searchAction.setLocation({ location }));
  }

  getWeatherData(cityName: string) {
    this.store.dispatch(searchAction.getWeatherData({ payload: cityName }));
  }

  getLocation$ = this.store.select(weatherSelector.getLocation);
  getWeatherData$ = this.store.select(weatherSelector.getWeatherData);
  getErrorMessage$ = this.store.select(weatherSelector.getErrorMessage);
}
