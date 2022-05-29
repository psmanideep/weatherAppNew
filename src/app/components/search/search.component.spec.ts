import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherFacadeService } from 'src/app/services/weather-facade.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  // const weatherFacadeServiceFactory = {
  //   getLocation$: {
  //     subscribe: (f: () => any) => f(),
  //   },
  //   getWeatherData$: {
  //     subscribe: (f: () => any) => f()
  //   },
  //   getErrorMessage$: {
  //     subscribe: (f: any) =>  f()
  //   },
  //   setLocation: () => ({}),
  //   getWeatherData: () => ({}),
  // };

  let weatherFacadeService: WeatherFacadeService;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SearchComponent ],
  //     imports: [],
  //     providers: [
  //       // {
  //       //   provide: WeatherFacadeService,
  //       //   useFactory: weatherFacadeServiceFactory,
  //       // },
  //       WeatherFacadeService,
  //     ]
  //   })
  //   .compileComponents();

  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    weatherFacadeService = TestBed.inject(WeatherFacadeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
