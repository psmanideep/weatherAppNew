import * as weatherSelector from './weather.selector';

const state = {
  location: '',
  errorMessage: '',
  weatherData: {
    dataLoaded: false,
  },
};
describe('Weather Selectors', () => {
  it('should test get location', () => {
    expect(weatherSelector.getLocation).toBeDefined();
    expect(weatherSelector.getLocation.projector(state.location)).not.toBe(
      state.location
    );
  });
  it('should test get weather data', () => {
    expect(weatherSelector.getWeatherData).toBeDefined();
    expect(
      weatherSelector.getWeatherData.projector(state.weatherData)
    ).not.toBe(state.weatherData);
  });
  it('should test get error message', () => {
    expect(weatherSelector.getErrorMessage).toBeDefined();
    expect(
      weatherSelector.getErrorMessage.projector(state.errorMessage)
    ).not.toBe(state.errorMessage);
  });
});
