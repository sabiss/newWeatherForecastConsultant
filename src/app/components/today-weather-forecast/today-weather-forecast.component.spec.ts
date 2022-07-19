import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherForecastComponent } from './today-weather-forecast.component';

describe('TodayWeatherForecastComponent', () => {
  let component: TodayWeatherForecastComponent;
  let fixture: ComponentFixture<TodayWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
