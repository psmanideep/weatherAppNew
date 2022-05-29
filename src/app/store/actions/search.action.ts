import { createAction, props } from '@ngrx/store';
import { IWeatherModel } from '../models/weather.model';

export const setLocation = createAction(
  '[Weather - setLocation] set location name',
  props<{ location: string }>()
);

export const getWeatherData = createAction(
  '[Weather - getCityWeatherData] load get city weather data',
  props<{ payload: string }>()
);

export const getWeatherDataSuccess = createAction(
  '[Weather - getCityWeatherDataSuccess] load get city weather data success',
  props<{ weatherData: any }>()
);

export const getWeatherDataFailed = createAction(
  '[Weather - getCityWeatherDataFailed] load get city weather data failed',
  props<{ error: any }>()
);

export const setErrorMessage = createAction(
  '[Weather - setErrorMessage] set error message',
  props<{ error: any }>()
);
