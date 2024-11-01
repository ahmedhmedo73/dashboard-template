import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberInputComponent } from './mobile-number-input.component';

describe('MobileNumberInputComponent', () => {
  let component: MobileNumberInputComponent;
  let fixture: ComponentFixture<MobileNumberInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNumberInputComponent],
    });
    fixture = TestBed.createComponent(MobileNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
