import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Regex } from '../utilities/regex';

export function startsWith05Validator(
  control: AbstractControl
): ValidationErrors | null {
  if (
    !control.value ||
    typeof control.value !== 'string' ||
    !control.value.startsWith('5')
  ) {
    return { startsWith05: true };
  }
  return null;
}

export function startsWith1or2Validator(
  control: AbstractControl
): ValidationErrors | null {
  if (
    !control.value ||
    typeof control.value !== 'string' ||
    !Regex.saudiNationalNumberRegex.test(control.value)
  ) {
    return { startsWith1or2: true };
  }
  return null;
}

export function lengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && value.length != length) {
      return { length: { requiredLength: length, actualLength: value.length } };
    }
    return null;
  };
}

export function emailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const value = control.value;

  if (!emailRegex.test(value)) {
    return { email: true };
  }

  return null; // Valid email
}

export function NoEmoji(): ValidatorFn {
  return (control: AbstractControl): any => {
    window.setTimeout(() => {
      if (control.value && control.value != '') {
        let trimedValue = control.value.replace(/[^a-zA-Z0-9 ]/gm, '');
        control.setValue(trimedValue);
      }
    }, 10);
  };
}
