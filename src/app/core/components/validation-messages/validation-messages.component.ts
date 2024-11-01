import { NgIf, NgSwitchCase } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-validation-messages',
  standalone: true,
  imports: [NgIf, NgSwitchCase, FormsModule, ReactiveFormsModule],
  templateUrl: './validation-messages.component.html',
  styleUrl: './validation-messages.component.scss',
})
export class ValidationMessagesComponent {
  private translateService = inject(TranslateService);

  patternMessage = input('');
  maxLength = input<number | null>(null);
  label = input('');
  isNumbersOnly = input(false);
  minLength = input<number | null>(null);
  errors = input<ValidationErrors | null>(null);

  getFirstError(): string {
    return this.errors ? Object.keys(this.errors)[0] : '';
  }

  getErrorMessage(): string {
    if (this.errors) {
      switch (this.getFirstError()) {
        case 'required':
          return this.translateService.instant('VALIDATION.REQUIRED');

        case 'email':
          return this.translateService.instant('VALIDATION.INVALID_EMAIL');

        case 'pattern':
          return this.translateService.instant('VALIDATION.PATTERN', {
            patternMessage: this.patternMessage,
          });

        case 'maxlength':
          return this.translateService.instant('VALIDATION.MAX_LENGTH', {
            label: this.label,
            maxLength: this.maxLength,
            type: this.isNumbersOnly()
              ? this.translateService.instant('VALIDATION.NUMBERS')
              : this.translateService.instant('VALIDATION.CHARACTERS'),
          });

        case 'minlength':
          return this.translateService.instant('VALIDATION.MIN_LENGTH', {
            label: this.label,
            minLength: this.minLength,
            type: this.isNumbersOnly()
              ? this.translateService.instant('VALIDATION.NUMBERS')
              : this.translateService.instant('VALIDATION.CHARACTERS'),
          });

        case 'length':
          const requiredLength = this.errors()?.['length']?.requiredLength;
          return this.translateService.instant('VALIDATION.LENGTH', {
            label: this.label,
            requiredLength: requiredLength,
            type: this.isNumbersOnly()
              ? this.translateService.instant('VALIDATION.NUMBERS')
              : this.translateService.instant('VALIDATION.CHARACTERS'),
          });

        case 'startsWith05':
          return this.translateService.instant('VALIDATION.STARTS_WITH_05', {
            label: this.label,
          });

        case 'startsWith1or2':
          return this.translateService.instant(
            'VALIDATION.STARTS_WITH_1_OR_2',
            { label: this.label }
          );

        default:
          return '';
      }
    }
    return '';
  }
}
