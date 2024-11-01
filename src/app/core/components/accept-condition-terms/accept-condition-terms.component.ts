import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/auth.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accept-condition-terms',
  templateUrl: './accept-condition-terms.component.html',
  styleUrls: ['./accept-condition-terms.component.scss'],
})
export class AcceptConditionTermsComponent {
  isAccept: boolean = false;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {}
  confirmTermsAndconditions(): void {
    this.usersService.confirm().subscribe({
      next: (res) => {
        this.toastrService.success(res.result);
        const user = this.authService.getCurrentUser() as IUser;
        this.authService.storeUser({ ...user, isConfirmed: true });
        this.router.navigateByUrl('/company-details');
      },
    });
  }
  changeActivation(event: any) {
    this.isAccept = event.target.checked;
  }
}
