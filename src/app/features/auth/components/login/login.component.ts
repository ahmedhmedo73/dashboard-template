import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserRoles } from 'src/app/core/enums/app.enum';
import { NoEmoji } from 'src/app/core/helpers/validators';
import { TextInputComponent } from 'src/app/core/components/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TextInputComponent,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  isLoading: boolean = false;
  isError: boolean = false;
  showPassword: boolean = false;

  isCurrentUserRole!: (str: UserRoles) => boolean;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private translationService: TranslationService,
    public router: Router
  ) {
    this.isCurrentUserRole = this.authService.isCurrentUserRole;
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/\S(?:\s*\S){2,}/),
          NoEmoji(),
        ],
      ],
      password: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.isLoading = true;

    const data = {
      userName: this.contactForm.value.userName.trim(),
      password: this.contactForm.value.password,
    };

    this.authService.login(data).subscribe({
      next: (res) => {
        if (!res.success) {
          this.isError = true;
          this.isLoading = false;
          return;
        }
        if (res.success) {
          this.authService.storeUser(res.result);
          this.router.navigate(['/dashboard']);
        }
      },
      error: () => {
        this.isError = true;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  toggleLanguage(): void {
    this.translationService.switchLanguage();
  }
}
