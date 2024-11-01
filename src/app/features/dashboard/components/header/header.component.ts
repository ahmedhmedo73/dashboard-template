import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicBreadcrumbComponent } from 'src/app/core/components/dynamic-breadcrumb/dynamic-breadcrumb.component';
import { IUser } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SideMenuService } from 'src/app/core/services/side-menu.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DynamicBreadcrumbComponent, NgIf, NgClass, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggleSideMenuValue: boolean = false;
  currentUser: IUser | null = null;
  isNavbarFixed: boolean = false;
  showOverlay: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private translationService: TranslationService,
    public sideMenuService: SideMenuService
  ) {}

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

  ngOnInit(): void {
    this.currentUser = this.authService?.getCurrentUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  toggleLanguage(): void {
    this.translationService.switchLanguage();
  }
}
