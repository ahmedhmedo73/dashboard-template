import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Regex } from '../utilities/regex';

@Directive({
  selector: '[identityId]',
})
export class IdentityIdDirective {
  @Input() identityId: boolean = true;
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue: string = this.el.nativeElement.value + '';
    const newValue = initialValue;

    if (!this.identityId) return;

    this.el.nativeElement.value = newValue.replace(
      Regex.identityIdDirective,
      ''
    );
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
