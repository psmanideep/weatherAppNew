import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { State } from '../store/models/state.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { WeatherFacadeService } from './weather-facade.service';
import * as searchAction from '../store/actions/search.action';
import * as weatherSelector from '../store/selectors/weather.selector';
import { MemoizedSelector } from '@ngrx/store';
import { Observable, of } from 'rxjs';

describe('WeatherFacadeService', () => {
  let service: WeatherFacadeService;
  let store: MockStore<State>
  const initialState = {};
  let mockLocationSelector: MemoizedSelector<State, string>;


  beforeEach(waitForAsync(() => {   
    
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();   
    service = TestBed.inject(WeatherFacadeService);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callThrough();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setLocation', () => {
    let location: string = "kakinada";
    service.setLocation(location);
    const action = searchAction.setLocation({ location });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should getWeatherData', () => {
    let location: string = "kakinada";
    service.getWeatherData(location);
    const action = searchAction.getWeatherData({ payload:location });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
  it('should getLocation$', () => {
    let location: string = "kakinada";
    let mock_data = new Observable<string>();
    service.getLocation$;
    const selctor = weatherSelector.getLocation;
    expect(selctor).not.toBeNull();
    expect(store.select).toBeTruthy();
  });

  it('should getWeatherData$', () => {
    service.getWeatherData$;
    const selctor = weatherSelector.getWeatherData;
    expect(selctor).not.toBeNull();
    expect(store.select).toBeTruthy();
  });

  it('should getErrorMessage$', () => {
    service.getErrorMessage$;
    const selctor = weatherSelector.getErrorMessage;
    expect(selctor).not.toBeNull();
    expect(store.select).toBeTruthy();
  });
});
