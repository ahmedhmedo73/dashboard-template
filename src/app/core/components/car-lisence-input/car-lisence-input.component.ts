import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-car-lisence-input',
  templateUrl: './car-lisence-input.component.html',
  styleUrls: ['./car-lisence-input.component.scss'],
})
export class CarLisenceInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';
  @Input() submitted = false;
  @Input() addRequiredAstrect = false;
  @Input() textArea = false;
  @Input() placeholder = '';
  @Input() patternMessage = '';
  @Input() style = '';
  @Input() readonly = false;
  @Input() minLength: string | number | null = null;
  @Input() maxLength: string | number | null = null;
  @Input() min: string | number | null = null;
  @Input() max: string | number | null = null;
  @Input() numbersOnly: boolean = false;
  @Output() selectedValue = new EventEmitter<any>();

  numbers?: number;
  chars?: number;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  onChange($event: any) {
    this.selectedValue.emit($event);
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  getFirstError(errors: any): string {
    return errors ? Object.keys(errors)[0] : '';
  }
  markAsTouched() {
    this.control.markAsDirty();
  }
}
