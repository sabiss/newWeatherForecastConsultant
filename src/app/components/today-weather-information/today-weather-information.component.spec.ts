import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherInformationComponent } from './today-weather-information.component';

describe('TodayWeatherInformationComponent', () => {
  let component: TodayWeatherInformationComponent;
  let fixture: ComponentFixture<TodayWeatherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
