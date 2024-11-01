import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    TranslateModule,
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent {
  @Input() controlName: string = '';
  @Input() required: boolean = false;
  @Input() label = '';
  @Input() submitted = false;
  @Input() addRequiredAstrect = false;
  @Input() placeholder = '';
  @Input() patternMessage = '';
  @Input() options: any[] = [];
  @Input() value = 'id';
  @Input() key = 'name';
  @Input() multiple = false;
  @Input() readonly = false;
  @Input() searchable = true;
  @Input() clearable = true;

  control: FormControl = new FormControl();
  optional = false;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['controlName']?.firstChange) {
      this.control = this.formGroupDirective.form.get(
        this.controlName
      ) as FormControl;
    }
  }

  getFirstError(): string {
    const errors = this.control.errors;
    return errors ? Object.keys(errors)[0] : '';
  }
}
