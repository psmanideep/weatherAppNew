import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from 'ngrx-mockstore';
import { Observable, of, Subscription } from 'rxjs';
import { WeatherFacadeService } from 'src/app/services/weather-facade.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let weatherFacadeService: WeatherFacadeService;
  const initialState = {};
  let errorSubObj = new Observable<Subscription>();
  let dataMock = {};
  let storeStub = {
    select: (fn: Function) => of((id: string) => dataMock),
    dispatch: jasmine.createSpy('dispatch'),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [SearchComponent],
        providers: [
          WeatherFacadeService,
          { provide: Store, useValue: storeStub },
          provideMockStore({ initialState }),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    weatherFacadeService = TestBed.inject(WeatherFacadeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribeToErrorMessage', () => {
    component.subscribeToErrorMessage();
    jasmine.createSpyObj('errorSubObj', ['subscribe']);
    jasmine.createSpyObj('errorSubObj', ['unsubscribe']);
    fixture.detectChanges();
  });
  it('should onSearch', () => {
    let mock_location = 'kakinada';
    component.onSearch(mock_location);
    const appServiceSpy = spyOn(
      weatherFacadeService,
      'setLocation'
    ).and.callFake((mock_location) => {});
    expect(appServiceSpy).toBeTruthy();
    fixture.detectChanges();
  });
  it('should ngOnDestroy', () => {
    component.ngOnDestroy();
    jasmine.createSpyObj('errorSubObj', ['unsubscribe']);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
