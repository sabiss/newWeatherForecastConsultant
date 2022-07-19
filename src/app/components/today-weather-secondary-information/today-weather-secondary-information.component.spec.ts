import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherSecondaryInformationComponent } from './today-weather-secondary-information.component';

describe('TodayWeatherSecondaryInformationComponent', () => {
  let component: TodayWeatherSecondaryInformationComponent;
  let fixture: ComponentFixture<TodayWeatherSecondaryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherSecondaryInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherSecondaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
