import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidString]',
  standalone: true,
})
export class ValidStringDirective {
  @Input() appValidString: boolean = true;

  constructor(private ngControl: NgControl) {}
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const initialValue: string = value + '';
    let newValue = initialValue;

    if (!this.appValidString || newValue == '') return;

    newValue = newValue.replace(/[^\sa-zA-Z0-9٠-٩\u0621-\u064A]*/g, '');

    if (initialValue !== newValue) {
      this.ngControl.control?.setValue(newValue, { emitEvent: false });
    }
  }
}
