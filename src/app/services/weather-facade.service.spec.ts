import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { WeatherFacadeService } from './weather-facade.service';

describe('WeatherFacadeService', () => {
  let service: WeatherFacadeService;
  let store: Store<State>;
  const initialState = {};

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [provideMockStore({ initialState })],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFacadeService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
