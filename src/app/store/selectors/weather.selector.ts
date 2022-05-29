import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../models/state.model';
import { weatherFeatureKey } from '../reducers/weather.reducer';

export const mainState = createFeatureSelector<State>(weatherFeatureKey);

export const getLocation = createSelector(
  mainState,
  (state) => state?.location
);

export const getWeatherData = createSelector(
  mainState,
  (state) => state?.weatherData
);

export const getErrorMessage = createSelector(
  mainState,
  (state) => state?.errorMessage
);
