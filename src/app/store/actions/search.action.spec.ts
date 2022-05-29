import * as searchAction from './search.action';
describe('search actions', () => {
  it('should return setLocation action', () => {
    let payload = { location: '' };
    expect(searchAction.setLocation(payload).type).toBe(
      '[Weather - setLocation] set location name'
    );
  });
  it('should return getWeatherData action', () => {
    let payload = { payload: '' };
    expect(searchAction.getWeatherData(payload).type).toBe(
      '[Weather - getCityWeatherData] load get city weather data'
    );
  });
  it('should return getWeatherDataSuccess action', () => {
    let payload = { weatherData: {} };
    expect(searchAction.getWeatherDataSuccess(payload).type).toBe(
      '[Weather - getCityWeatherDataSuccess] load get city weather data success'
    );
  });
  it('should return getWeatherDataFailed action', () => {
    let payload = { error: '' };
    expect(searchAction.getWeatherDataFailed(payload).type).toBe(
      '[Weather - getCityWeatherDataFailed] load get city weather data failed'
    );
  });
  it('should return setErrorMessage action', () => {
    let payload = { error: '' };
    expect(searchAction.setErrorMessage(payload).type).toBe(
      '[Weather - setErrorMessage] set error message'
    );
  });
});
