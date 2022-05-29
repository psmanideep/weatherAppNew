import { TestBed } from '@angular/core/testing';
import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
      declarations: [CustomDatePipe],
    }).compileComponents();
  });
  it('should check day', () => {
    const datePipe = new CustomDatePipe();
    let result = datePipe.transform('123456', 'ddd');
    expect(result).toStrictEqual('Fri');
  });
});
