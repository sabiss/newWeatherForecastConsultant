import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTodayForecastComponent } from './header-today-forecast.component';

describe('HeaderTodayForecastComponent', () => {
  let component: HeaderTodayForecastComponent;
  let fixture: ComponentFixture<HeaderTodayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTodayForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTodayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
