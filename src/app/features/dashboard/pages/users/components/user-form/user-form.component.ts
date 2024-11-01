import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityForm } from 'src/app/core/helpers/EntityForm.helper';

import { ILookup } from 'src/app/core/models/global.model';
import { IUserForm } from 'src/app/core/models/users.model';
import { SharedService } from 'src/app/core/services/shared.service';
import { UsersService } from 'src/app/core/services/users.service';
import { CommonModule, Location } from '@angular/common';
import { PageHeaderComponent } from 'src/app/core/components/page-header/page-header.component';
import { TextInputComponent } from 'src/app/core/components/text-input/text-input.component';
import { SelectInputComponent } from 'src/app/core/components/select-input/select-input.component';
import { TextAreaInputComponent } from 'src/app/core/components/text-area-input/text-area-input.component';
import { SaveButtonComponent } from 'src/app/core/components/save-button/save-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { GenericFormComponent } from 'src/app/core/components/generic-form/generic-form.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectInputComponent,
    TextAreaInputComponent,
    SaveButtonComponent,
    TranslateModule,
    GenericFormComponent,
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent extends EntityForm<IUserForm> {
  title: string = '';

  constructor(
    usersService: UsersService,
    location: Location,
    router: Router,
    private sharedService: SharedService
  ) {
    super(usersService, router, location);
    this.formConfig = [
      {
        type: 'text',
        inputs: {
          controlName: 'name',
          label: 'FORM.NAME_LABEL',
          readonly: true,
          required: true,
          disabled: true,
          placeholder: 'FORM.NAME_PLACEHOLDER',
          maxLength: 300,
          patternMessage: 'FORM.NAME_PATTERN_MESSAGE',
        },
      },
      {
        type: 'select',
        inputs: {
          controlName: 'entityTypeId',
          label: 'FORM.ENTITY_TYPE_LABEL',
          required: true,
          placeholder: 'FORM.ENTITY_TYPE_PLACEHOLDER',
          options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ],
        },
      },
      {
        type: 'text',
        inputs: {
          controlName: 'identityNumber',
          label: 'FORM.IDENTITY_NUMBER_LABEL',
          required: true,
          placeholder: 'FORM.IDENTITY_NUMBER_PLACEHOLDER',
          maxLength: 10,
          numbersOnly: true,
        },
      },
      {
        type: 'text',
        inputs: {
          label: 'FORM.EMAIL_LABEL',
          controlName: 'email',
          required: true,
          placeholder: 'FORM.EMAIL_PLACEHOLDER',
          maxLength: 50,
        },
      },
      {
        type: 'text',
        inputs: {
          label: 'FORM.MOBILE_NUMBER_LABEL',
          controlName: 'mobileNumber',
          required: true,
          placeholder: 'FORM.MOBILE_NUMBER_PLACEHOLDER',
          maxLength: 9,
          numbersOnly: true,
        },
      },
      {
        type: 'textarea',
        containerStyleClass: 'col-start-1',
        inputs: {
          controlName: 'notes',
          label: 'FORM.NOTES_LABEL',
          placeholder: 'FORM.NOTES_PLACEHOLDER',
          maxLength: 500,
          required: true,
        },
      },
    ];
    this.buildForm();
  }

  get roles(): ILookup[] {
    return this.sharedService.roles;
  }
  get entityTypes(): ILookup[] {
    return this.sharedService.entityTypes;
  }

  ngOnInit(): void {
    this.title = this.editId ? 'تعديل مستخدم' : 'تسجيل مستخدم جديد';
  }
}
