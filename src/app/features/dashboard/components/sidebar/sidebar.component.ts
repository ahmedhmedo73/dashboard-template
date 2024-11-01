import { AuthService } from 'src/app/core/services/auth.service';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserRoles } from 'src/app/core/enums/app.enum';
import { SideMenuService } from 'src/app/core/services/side-menu.service';
import { BeneficiarTypesEnum } from 'src/app/core/enums/beneficiarType.enum';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() openSidebar: boolean = false;
  isCurrentUserRole!: (str: UserRoles) => boolean;
  isBeneficiarTypeId!: (str: BeneficiarTypesEnum) => boolean;
  menuSidebar: {
    link: string;
    activeWhen?: string;
    role: any;
    icon: string;
    link_name: string;
  }[];

  constructor(
    private router: Router,
    private authService: AuthService,
    public sideMenuService: SideMenuService
  ) {
    this.isCurrentUserRole = this.authService.isCurrentUserRole;
    this.isBeneficiarTypeId = this.authService.isBeneficiarTypeId;
    this.menuSidebar = [
      {
        link_name: 'menuSidebar.usersManagement',
        link: '/dashboard/users',
        icon: '/img/sidebar/users.svg',
        role: this.isCurrentUserRole(UserRoles.Admin),
      },
      {
        link_name: 'menuSidebar.services',
        link: '/companies/InternalHajj',
        icon: '/img/sidebar/inner-hajjs.svg',
        role: this.isCurrentUserRole(UserRoles.Admin),
      },
      {
        link_name: 'menuSidebar.aboutUs',
        link: '/companies/ExternalHajj',
        icon: '/img/sidebar/outer-hajjs.svg',
        role: this.isCurrentUserRole(UserRoles.Admin),
      },
    ];
  }

  public isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  isLinkActive(link: any) {
    const url = this.router.url;
    if (url === '/dashboard' && link.activeWhen === 'home') return true;
    return url.includes(link.activeWhen);
  }
}
