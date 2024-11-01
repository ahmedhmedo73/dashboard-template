import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptConditionTermsComponent } from './accept-condition-terms.component';

describe('AcceptConditionTermsComponent', () => {
  let component: AcceptConditionTermsComponent;
  let fixture: ComponentFixture<AcceptConditionTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptConditionTermsComponent]
    });
    fixture = TestBed.createComponent(AcceptConditionTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
