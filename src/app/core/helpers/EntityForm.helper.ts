import { inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { IResponse } from '../models/global.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getNextDay } from '../utilities/date';
import { FormFieldConfig } from '../interfaces/generic-form.interface';
interface IService<T> {
  getById: (id: string) => Observable<IResponse<T>>;
  add: (body: T) => Observable<IResponse<string>>;
  addFormData: (body: FormData) => Observable<IResponse<string>>;
  editFormData: (body: FormData) => Observable<IResponse<string>>;
  editOne: (body: T) => Observable<IResponse<string>>;
}

export class EntityForm<T> {
  fb = inject(FormBuilder);

  submitted: boolean = false;
  isLoading: boolean = false;
  editId: string | null = null;
  form!: FormGroup;
  service!: IService<T>;
  formConfig: FormFieldConfig[] = [];

  constructor(
    service: IService<T>,
    router: Router,
    private location: Location
  ) {
    this.service = service;
    if (router.url.includes('edit')) {
      this.getById(router.url.split('edit/')[1]);
    } else if (router.url.includes('details')) {
      this.getById(router.url.split('details/')[1]);
    }
  }

  get f(): any {
    return this.form ? this.form.controls : false;
  }
  protected buildForm(): void {
    const formGroup: { [key: string]: FormControl } = {};
    this.formConfig.forEach((field) => {
      const validators = [];
      if (field.inputs.required) {
        validators.push(Validators.required);
      }
      if (field.inputs.maxLength) {
        validators.push(Validators.maxLength(field.inputs.maxLength));
      }
      if (field.inputs.minLength) {
        validators.push(Validators.minLength(field.inputs.minLength));
      }
      formGroup[field.inputs.controlName] = new FormControl('', validators);
    });
    this.form = this.fb.group(formGroup);
    console.log(this.form);
  }
  getById(id: string) {
    this.editId = id;
    this.isLoading = true;
    this.service.getById(id).subscribe({
      next: (res: any) => {
        const data = res.result;
        if ('date' in data) {
          data.date = new Date(data.date);
        }
        this.setFormValue(res.result);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  setFormValue(data: any) {
    Object.keys(data).forEach((key) => {
      if (this.f[key]) {
        this.f[key].setValue(data[key]);
        this.f[key].updateValueAndValidity();
      }
    });
  }

  resetComponent() {
    this.isLoading = false;
    this.submitted = false;
    this.editId = '';
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
  handleData(formValue: any) {
    const data: any = {};
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] && key === 'date') {
        data[key] = getNextDay(formValue[key].value);
      } else if (formValue[key] && typeof formValue[key].value === 'string') {
        data[key] = formValue[key].value.trim();
      } else {
        data[key] = formValue[key].value;
      }
    });
    return data;
  }

  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    const formValue = this.form.value;

    if (!this.editId) {
      this.service.add(this.handleData(formValue)).subscribe({
        next: () => {
          // this.toastr.success(res.result);
          this.location.back();
        },
        error: () => (this.isLoading = false),
        complete: () => {
          this.resetComponent();
        },
      });
    } else {
      this.service
        .editOne({ id: this.editId, ...this.handleData(formValue) })
        .subscribe({
          next: () => {
            // this.toastr.success(res.result);
            this.location.back();
          },
          error: () => (this.isLoading = false),
          complete: () => {
            this.resetComponent();
          },
        });
    }
  }

  navigateBack(): void {
    this.location.back();
  }
}
