import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { DocumentType } from 'src/app/core/enums/app.enum';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements ControlValueAccessor {
  @Input() controlName!: string;
  @Input() label = '';
  @Input() placeholder = '';
  @Output() documentSaved: File | any = new EventEmitter<File>();
  @Input() addRequiredAstrect = false;
  @Input() imgOnly: boolean = false;
  @Input() fileTypeInDB!: number;
  @Input() dditMode: boolean = false;
  @Input() controlValue: any;
  @Input() fileName!: string;
  @Input() disabled!: boolean;
  @Input() parentId!: any;
  @Input() maxFileSize: number = 1;
  documentId!: string;
  fileInput: any;
  typeErr = false;
  controlTouched = false;
  sizeErr = false;
  required = false;
  imagePath: any;
  imageSrc: any;
  isLoading: boolean = false;
  allowedImgs: string[] = ['image/png', 'image/jpeg', 'image/jpg', ''];

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe({
      next: (value) => {
        if (value === null || value === 's') {
          this.deleteFile(null, true);
        }
      },
    });
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
  validateFile(file: File) {
    let errors: any = {};

    if (!file) errors['required'] = true;
    if (
      (this.imgOnly && !this.allowedImgs.includes(file.type)) || // if images only
      (!this.imgOnly &&
        !['application/pdf', ...this.allowedImgs].includes(file.type)) // if file
    ) {
      errors['type'] = true;
    }
    if (file.size > this.maxFileSize * 1024 * 1024) {
      errors['size'] = true;
    }

    if (Object.keys(errors).length === 0) {
      this.control.setErrors(null);
      return true;
    } else {
      this.control.setErrors(errors);
      return false;
    }
  }

  change(e: any) {
    const file = e.target.files[0];
    this.fileInput = e.target.files[0];

    const valid = this.validateFile(file);
    if (!valid) return;

    this.control.setValue(file);
    this.fileName = file.name;
  }

  deleteFile(e?: any, keepControl: boolean = false): void {
    e?.stopPropagation();
    this.fileName = '';
    this.fileInput = undefined;
    if (!keepControl) {
      this.control.setValue(undefined);
      this.control.setErrors({ required: true });
    } else {
      this.control.setErrors(null);
    }
  }

  get documentType() {
    return DocumentType;
  }

  getFirstError(errors: any): string {
    return errors ? Object.keys(errors)[0] : '';
  }
}
