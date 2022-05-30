import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getWeatherData', () => {
    service.getWeatherData('kakinada');
    let payLoad = 'Kakinada';
    spyOn(service, 'getWeatherData').and.callThrough();
    service.getWeatherData(payLoad);
    expect(service.getWeatherData).toHaveBeenCalled();
  });

  it('should call getWeatherData:: failure', () => {
    service.getWeatherData('kakinada');
    let payLoad = '@312##!';
    spyOn(service, 'getWeatherData').and.callThrough();
    service.getWeatherData(payLoad);
    expect(service.getWeatherData).toThrowError();
  });
});
