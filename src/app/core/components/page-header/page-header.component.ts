import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TableSearchComponent } from '../table-search/table-search.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, TableSearchComponent, RouterLink],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() addTitle: string = '';
  @Input() placeholder: string = '';
  @Input() withBorder: boolean = true;
  @Input() backLink: string = '';
  @Input() hideAddBtn: boolean = false;
  @Input() hideSearch: boolean = false;
  @Input() filter: any = {};

  url: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url.split('?')[0];
  }

  onSearch(searchKeyword: string) {
    this.router.navigate([this.url], {
      queryParams: {
        ...this.filter,
        searchKeyword: searchKeyword || undefined,
        pageNumber: 1,
      },
    });
  }
}
