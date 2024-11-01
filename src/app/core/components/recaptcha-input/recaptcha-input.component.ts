import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recaptcha-input',
  templateUrl: './recaptcha-input.component.html',
  styleUrls: ['./recaptcha-input.component.scss'],
})
export class RecaptchaInputComponent implements ControlValueAccessor {
  @Input() style = '';
  @Output() selectedValue = new EventEmitter<any>();

  siteKey: string = '6Le275IpAAAAAFGO4Vq5ctbjTFSgcNZs_hsGSANg';

  constructor(
    @Self() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this;
  }
  ngOnInit(): void {
    if (!environment.reCaptchaActivation) {
      setTimeout(() => {
        this.control.setValue(true);
        this.control.markAsTouched();
        this.cdr.detectChanges();
      }, 1);
    }
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
}
