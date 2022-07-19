import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastOfWeekContainerComponent } from './forecast-of-week-container.component';

describe('ForecastOfWeekContainerComponent', () => {
  let component: ForecastOfWeekContainerComponent;
  let fixture: ComponentFixture<ForecastOfWeekContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastOfWeekContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastOfWeekContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
