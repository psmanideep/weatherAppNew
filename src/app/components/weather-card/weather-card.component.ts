import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherFacadeService } from '../../services/weather-facade.service';
import { IWeatherModel } from '../../store/models/weather.model';
@Component({
  selector: 'wa-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  weatherDataSub!: Subscription;
  locationSub!: Subscription;
  weatherData!: any;
  dayFormat = 'ddd';
  dateFormat = 'D MMM';

  constructor(private weatherFacadeService: WeatherFacadeService) {}

  ngOnInit(): void {
    this.subscribeToLocation();
  }

  subscribeToLocation(): void {
    this.locationSub?.unsubscribe();
    this.locationSub = this.weatherFacadeService.getLocation$.subscribe(
      (location) => {
        if (location) {
          this.weatherFacadeService.getWeatherData(location);
          this.subscribeToWeatherData();
        }
      }
    );
  }

  subscribeToWeatherData(): void {
    this.weatherDataSub?.unsubscribe();
    this.weatherDataSub = this.weatherFacadeService.getWeatherData$.subscribe(
      (data) => {
        this.weatherData = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.weatherDataSub?.unsubscribe();
    this.locationSub?.unsubscribe();
  }
}
