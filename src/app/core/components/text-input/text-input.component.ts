import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  input,
  InputSignal,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NumbersOnlyDirective } from '../../directives/numbers-only.directive';
import { ValidStringDirective } from '../../directives/valid-string.directive';
import { TextTrimDirective } from '../../directives/text-trim.directive';
import { InputTextModule } from 'primeng/inputtext';
import { ValidationMessagesComponent } from '../validation-messages/validation-messages.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NumbersOnlyDirective,
    ValidStringDirective,
    TextTrimDirective,
    InputTextModule,
    ValidationMessagesComponent,
    TranslateModule,
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  private formGroupDirective = inject(FormGroupDirective);

  controlName: InputSignal<string> = input.required<string>();
  label: InputSignal<string> = input.required<string>();
  placeholder: InputSignal<string> = input.required<string>();
  type: InputSignal<string> = input<string>('text', {
    alias: 'inputTextType',
  });
  required: InputSignal<boolean> = input<boolean>(false);
  disabled: InputSignal<boolean> = input<boolean>(false);
  submitted: InputSignal<boolean> = input<boolean>(false);
  addRequiredAstrect: InputSignal<boolean> = input<boolean>(false);
  patternMessage: InputSignal<string> = input<string>('');
  containerStyleClass: InputSignal<string> = input<string>('');
  style: InputSignal<string> = input<string>('');
  readonly: InputSignal<boolean> = input<boolean>(false);
  minLength: InputSignal<number> = input<number>(0);
  maxLength: InputSignal<number> = input<number>(9999);
  min: InputSignal<string> = input<string>('');
  max: InputSignal<string> = input<string>('');
  numbersOnly: InputSignal<boolean> = input<boolean>(false);
  identityId: InputSignal<boolean> = input<boolean>(false);
  appValidString: InputSignal<boolean> = input<boolean>(true);

  @Output() onkeydownEnter: EventEmitter<any> = new EventEmitter();

  control: FormControl = new FormControl();

  ngOnInit(): void {
    this.control = this.formGroupDirective.form.get(
      this.controlName()
    ) as FormControl;
  }
}
