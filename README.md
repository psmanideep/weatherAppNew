# Weatherapp
![appicon](https://user-images.githubusercontent.com/22769589/68296145-f7305d80-00a4-11ea-9cbe-24b18222bfa9.png)

Weatherapp is a simple weather forecast app, which uses [OpenWeatherMap](https://openweathermap.org) APIs to fetch forecast data based on the enetered location. The main goal of this app is to give an insight of how to build an high quality Angular application that uses the latest versions of angular, angular material UI, ngRx store for state management etc..

## Getting started
<li>Run <b>ng serve</b> for a dev server. Navigate to <a href="http://localhost:4200/">http://localhost:4200/</a> The app will automatically reload if you change any of the source files</li>
<li>Run <b>ng build</b> to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build</li>
<li>Run <b>ng test</b> to execute the unit tests via Karma</li>
<li>Run <b>ng e2e</b> to execute the end-to-end tests via Protractor</li>

## Libraries and tools
<li><a href="https://angular.io/docs">Angular 13</a></li>
<li><a href="https://material.angular.io/guide/getting-started">Angular Material UI</a></li>
<li><a href="https://ngrx.io/guide/store">NgRxStore</a></li>
<li><a href="https://openweathermap.org/api">OpenWeatherMap API</a></li>

## Testing 
<li><a href="https://jasmine.github.io/pages/getting_started.html">Jasmine</a></li>
<li><a href="https://angular.io/guide/testing">Karma</a></li>

## Architecture
The app uses MVW architecture to have a bidirectional flow of data, separation of concern, testability, and a lot more. And the NgRx store is designed based on entity features i.e. app can be optimized based on requirements 
<pre>
{ 
  weather: {
    location: 'Bengaluru',
    errorMessage: '',
    weatherData: {
    },
    forecastData: {
    }
  }
}
</pre>

## Design
Uses a simple design to give an insigthts of how the app works, and the icons are from <a href="https://openweathermap.org/api">OpenWeatherMap API Icons</a>
