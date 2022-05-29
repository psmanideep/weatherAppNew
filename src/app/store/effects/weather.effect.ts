import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import * as searchAction from '../actions/search.action';
import { IWeatherModel } from '../models/weather.model';

@Injectable()
export class WeatherEntityEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  getWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchAction.getWeatherData),
      switchMap((action) =>
        this.weatherService.getWeatherData(action.payload).pipe(
          switchMap((response) => {
            return [
              searchAction.getWeatherDataSuccess(response),
              searchAction.setErrorMessage({ error: '' }),
            ];
          }),
          catchError((err) => {
            return [
              searchAction.setErrorMessage({ error: err.error.message }),
              searchAction.getWeatherDataFailed(err),
            ];
          })
        )
      )
    )
  );
}
