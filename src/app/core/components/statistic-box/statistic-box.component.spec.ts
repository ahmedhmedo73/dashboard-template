import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticBoxComponent } from './statistic-box.component';

describe('StatisticBoxComponent', () => {
  let component: StatisticBoxComponent;
  let fixture: ComponentFixture<StatisticBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticBoxComponent]
    });
    fixture = TestBed.createComponent(StatisticBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
