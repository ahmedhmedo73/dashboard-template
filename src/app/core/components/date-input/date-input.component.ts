import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() submitted = false;
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() defaultDate!: Date;
  @Input() disabledDates: Date[] = [];
  @Input() addRequiredAstrect = false;
  @Input() textArea = false;
  @Input() placeholder = '';
  @Input() patternMessage = '';
  @Input() style = '';
  @Input() styleClass: string = 'w-100';
  @Input() disabled = false;
  DateFrom: string = '';

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
