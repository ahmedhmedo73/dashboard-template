import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaInputComponent } from './recaptcha-input.component';

describe('RecaptchaInputComponent', () => {
  let component: RecaptchaInputComponent;
  let fixture: ComponentFixture<RecaptchaInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaptchaInputComponent],
    });
    fixture = TestBed.createComponent(RecaptchaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
