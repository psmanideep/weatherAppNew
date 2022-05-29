import { createReducer, on } from '@ngrx/store';
import * as searchAction from '../actions/search.action';
import { State } from '../models/state.model';

export const weatherFeatureKey = 'weather';

export const initialState: State = {
  location: '',
  errorMessage: '',
  weatherData: {
    dataLoaded: false,
  },
};

export const weatherReducer = createReducer(
  initialState,
  on(searchAction.setLocation, (state, data) => ({
    ...state,
    location: data.location,
  })),
  on(searchAction.getWeatherDataSuccess, (state, data) => ({
    ...state,
    weatherData: { ...data, dataLoaded: true },
  })),
  on(searchAction.getWeatherDataFailed, (state) => ({
    ...state,
    weatherData: { dataLoaded: false },
  })),
  on(searchAction.setErrorMessage, (state, data) => ({
    ...state,
    errorMessage: data.error,
  }))
);
