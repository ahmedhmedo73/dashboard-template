import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Regex } from '../utilities/regex';

@Directive({
  selector: '[appArStringOnly]',
})
export class ArStringOnlyDirective {
  @Input() appArStringOnly: boolean = true;
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue: string = this.el.nativeElement.value + '';
    const newValue = initialValue;

    if (!this.appArStringOnly) return;

    this.el.nativeElement.value = newValue.replace(Regex.notArabicChars, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
