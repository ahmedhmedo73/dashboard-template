import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTextTrim]',
  standalone : true
})
export class TextTrimDirective {
  constructor(private ngControl: NgControl) {}
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const initialValue: string = value + '';
    let newValue = initialValue;

    newValue = newValue.replace(/\s+/g, ' ');
    if (newValue === ' ') newValue = '';
    if (initialValue !== newValue) {
      this.ngControl.control?.setValue(newValue, { emitEvent: false });
    }
  }
}
