import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAccsessComponent } from './no-accsess.component';

describe('NoAccsessComponent', () => {
  let component: NoAccsessComponent;
  let fixture: ComponentFixture<NoAccsessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoAccsessComponent]
    });
    fixture = TestBed.createComponent(NoAccsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
