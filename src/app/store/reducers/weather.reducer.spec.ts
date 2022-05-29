import * as searchAction from '../actions/search.action';
import { weatherReducer } from './weather.reducer';
import { State } from '../models/state.model';

export const weatherFeatureKey = 'weather';

describe('it should test weather reducer ', () => {
  const initialState: State = {
    location: '',
    errorMessage: '',
    weatherData: {
      dataLoaded: false,
    },
  } as State;
  it('it should test set location', () => {
    let expected = weatherReducer(initialState, searchAction.setLocation);
    expect(expected).toBeDefined();
  });
  it('it should test set error message', () => {
    let expected = weatherReducer(initialState, searchAction.setErrorMessage);
    expect(expected).toBeDefined();
  });
  it('it should test get weather data success', () => {
    let expected = weatherReducer(
      initialState,
      searchAction.getWeatherDataSuccess
    );
    expect(expected).toBeDefined();
  });
  it('it should test get weather data failed', () => {
    let expected = weatherReducer(
      initialState,
      searchAction.getWeatherDataFailed
    );
    expect(expected).toBeDefined();
  });
});
