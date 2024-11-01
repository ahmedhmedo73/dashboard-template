import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExportComponent } from './file-export.component';

describe('FileExportComponent', () => {
  let component: FileExportComponent;
  let fixture: ComponentFixture<FileExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileExportComponent]
    });
    fixture = TestBed.createComponent(FileExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
