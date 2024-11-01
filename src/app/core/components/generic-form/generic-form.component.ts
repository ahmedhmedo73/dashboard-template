import {
  Component,
  input,
  InputSignal,
  output,
  inject,
  ViewChild,
  ViewContainerRef,
  Type,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaInputComponent } from '../text-area-input/text-area-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { Location, NgClass, NgFor } from '@angular/common';
import { SaveButtonComponent } from '../save-button/save-button.component';
import { FormFieldConfig } from '../../interfaces/generic-form.interface';

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextAreaInputComponent,
    TextInputComponent,
    SelectInputComponent,
    TranslateModule,
    NgFor,
    SaveButtonComponent,
    NgClass,
  ],
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent {
  private location = inject(Location);

  @ViewChild('formFieldContainer', { read: ViewContainerRef, static: true })
  formFieldContainer!: ViewContainerRef;

  form: InputSignal<FormGroup> = input<FormGroup>(new FormGroup({}));
  formConfig: InputSignal<FormFieldConfig[]> = input<FormFieldConfig[]>([]);
  isLoading: InputSignal<boolean> = input<boolean>(false);

  formSubmit = output<any>();

  private componentMapper: { [key: string]: Type<any> } = {
    text: TextInputComponent,
    select: SelectInputComponent,
    textarea: TextAreaInputComponent,
  };

  ngOnInit(): void {
    this.loadDynamicComponents();
  }

  private loadDynamicComponents(): void {
    const viewContainerRef = this.formFieldContainer;

    this.formConfig().forEach((field) => {
      const componentType = this.componentMapper[field.type];
      const componentRef = viewContainerRef.createComponent(componentType);

      field.containerStyleClass &&
        componentRef.location.nativeElement.classList.add(
          field.containerStyleClass
        );
      Object.entries(field.inputs).forEach(([key, value]: any) => {
        componentRef.setInput(key, value);
      });
    });
  }

  onSubmit(): void {
    this.form().valid && this.formSubmit.emit(this.form().value);
  }
  navigateBack(): void {
    this.location.back();
  }
}
