import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    const apiUrl = `${environment.weatherApi.baseApiPath}?q=${cityName}&appid=${environment.weatherApi.apiKey}&units=${environment.weatherApi.units}`;
    return this.httpClient.get(apiUrl).pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    return throwError(() => error);
  }
}
