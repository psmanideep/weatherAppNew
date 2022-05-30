import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WeatherFacadeService } from 'src/app/services/weather-facade.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let weatherFacadeService: WeatherFacadeService;
  const initialState = {};

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WeatherCardComponent],
        providers: [WeatherFacadeService, provideMockStore({ initialState })],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    weatherFacadeService = TestBed.inject(WeatherFacadeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnDestroy', () => {
    component.ngOnDestroy();
    jasmine.createSpyObj('errorSubObj', ['unsubscribe']);
    fixture.detectChanges();
  });
  it('should subscribeToLocation', () => {
    component.ngOnInit();
    component.subscribeToLocation();
    spyOn(weatherFacadeService, 'getLocation$' as never);
    spyOn(weatherFacadeService, 'getWeatherData$' as never);
    fixture.detectChanges();
  });
  it('should subscribeToWeatherData', () => {
    component.subscribeToWeatherData();
    spyOn(weatherFacadeService, 'getWeatherData$' as never);
    expect(component.weatherData).not.toBeNull();
    fixture.detectChanges();
  });
});
