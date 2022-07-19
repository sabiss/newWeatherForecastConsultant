import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeekForecastWindowComponent } from './components/week-forecast-window/week-forecast-window.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CityPhotoComponent } from './components/city-photo/city-photo.component';
import { TodayWeatherForecastComponent } from './components/today-weather-forecast/today-weather-forecast.component';
import { ForecastOfWeekContainerComponent } from './components/forecast-of-week-container/forecast-of-week-container.component';
import { HeaderTodayForecastComponent } from './components/header-today-forecast/header-today-forecast.component';
import { TodayWeatherInformationComponent } from './components/today-weather-information/today-weather-information.component';
import { TodayWeatherSecondaryInformationComponent } from './components/today-weather-secondary-information/today-weather-secondary-information.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekForecastWindowComponent,
    SearchBarComponent,
    CityPhotoComponent,
    TodayWeatherForecastComponent,
    ForecastOfWeekContainerComponent,
    HeaderTodayForecastComponent,
    TodayWeatherInformationComponent,
    TodayWeatherSecondaryInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
