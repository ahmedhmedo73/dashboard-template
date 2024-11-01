import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[numbersOnly]',
  standalone: true,
})
export class NumbersOnlyDirective {
  @Input() numbersOnly: boolean = true;

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const initialValue: string = value + '';
    let newValue = initialValue;

    if (!this.numbersOnly || newValue == '') return;

    newValue = newValue.replace(/[^0-9٠-٩]*/g, '');
    if (initialValue !== newValue) {
      this.ngControl.control?.setValue(newValue, { emitEvent: false });
    }
  }
}
