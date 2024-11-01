import { FormFieldType } from '../types/generic-form.type';

export interface FormFieldConfig {
  containerStyleClass?: string;
  type: FormFieldType;

  inputs: {
    controlName: string;
    label: string;
    required: boolean;
    placeholder: string;
    inputTextType?: 'text' | 'password';
    maxLength?: number;
    minLength?: number;
    options?: any[];
    patternMessage?: string;
    numbersOnly?: boolean;
    readonly?: boolean;
    disabled?: boolean;
  };
}
