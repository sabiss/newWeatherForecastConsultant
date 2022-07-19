import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekForecastWindowComponent } from './week-forecast-window.component';

describe('WeekForecastWindowComponent', () => {
  let component: WeekForecastWindowComponent;
  let fixture: ComponentFixture<WeekForecastWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekForecastWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekForecastWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
