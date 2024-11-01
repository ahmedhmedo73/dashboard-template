import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter, startWith } from 'rxjs';
import { PageHeaderComponent } from 'src/app/core/components/page-header/page-header.component';
import { TableComponent } from 'src/app/core/components/table/table.component';
import { List } from 'src/app/core/helpers/List.helper';
import { IColumns } from 'src/app/core/models/table.model';
import { IUserList } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TableComponent, PageHeaderComponent, TranslateModule],
  providers: [DatePipe],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent extends List<IUserList> {
  columns: IColumns[] = [
    {
      key: 'rowNumber',
      title: 'COLUMN_ROW_NUMBER',
    },
    {
      key: 'name',
      title: 'COLUMN_NAME',
    },
    {
      key: 'email',
      title: 'COLUMN_EMAIL',
    },
    {
      key: 'mobileNumber',
      title: 'COLUMN_MOBILE_NUMBER',
    },
    {
      key: 'entityTypeName',
      title: 'COLUMN_ENTITY_TYPE',
    },
    {
      key: 'isActive',
      title: 'COLUMN_IS_ACTIVE',
    },
    {
      key: 'actions',
      title: 'COLUMN_ACTIONS',
    },
  ];

  routerSubscription: any;

  constructor(usersService: UsersService, private router: Router) {
    super(usersService);
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router.url)
      )
      .subscribe({
        next: () => {
          this.handleQueryParams();
        },
      });
  }

  handleQueryParams(): void {
    const queryParams: any = this.router.parseUrl(this.router.url).queryParams;

    this.currentFilter = {
      ...this.currentFilter,
      ...queryParams,
    };

    this.getItems();
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
