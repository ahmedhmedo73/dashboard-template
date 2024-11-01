import { NgIf } from '@angular/common';
import { Component, inject, input, InputSignal } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ValidationMessagesComponent } from '../validation-messages/validation-messages.component';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-text-area-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    ValidationMessagesComponent,
    TranslateModule,
    InputTextareaModule,
  ],
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class TextAreaInputComponent {
  private formGroupDirective = inject(FormGroupDirective);

  controlName: InputSignal<string> = input<string>('');
  label: InputSignal<string> = input<string>('');
  submitted: InputSignal<boolean> = input<boolean>(false);
  textArea: InputSignal<boolean> = input<boolean>(false);
  placeholder: InputSignal<string> = input<string>('');
  rows: InputSignal<number> = input<number>(3);
  readonly: InputSignal<boolean> = input<boolean>(false);
  patternMessage: InputSignal<string> = input<string>('');
  minlength: InputSignal<number | null> = input<number | null>(null);
  maxLength: InputSignal<number | null> = input<number | null>(null);
  required: InputSignal<boolean> = input<boolean>(false);

  control: FormControl = new FormControl();

  ngOnInit(): void {
    this.control = this.formGroupDirective.form.get(
      this.controlName()
    ) as FormControl;
  }
}
