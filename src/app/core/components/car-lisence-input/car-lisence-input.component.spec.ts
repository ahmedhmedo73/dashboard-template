import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLisenceInputComponent } from './car-lisence-input.component';

describe('CarLisenceInputComponent', () => {
  let component: CarLisenceInputComponent;
  let fixture: ComponentFixture<CarLisenceInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarLisenceInputComponent],
    });
    fixture = TestBed.createComponent(CarLisenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
