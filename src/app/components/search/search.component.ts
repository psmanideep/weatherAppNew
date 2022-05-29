import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WeatherFacadeService } from '../../services/weather-facade.service';

@Component({
  selector: 'wa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  placeHolder: string = 'Enter your city name';
  weatherDataSub!: Subscription;
  errorSub!: Subscription;
  errorMessage!: string;
  location!: string;

  constructor(private weatherFacadeService: WeatherFacadeService) {}

  ngOnInit(): void {
    this.subscribeToErrorMessage();
  }

  subscribeToErrorMessage(): void {
    this.errorSub?.unsubscribe();
    this.errorSub = this.weatherFacadeService.getErrorMessage$.subscribe(
      (data) => {
        this.errorMessage = data;
      }
    );
  }

  onSearch(location: string): void {
    this.weatherFacadeService.setLocation(location);
    this.location = '';
  }

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe();
  }
}
