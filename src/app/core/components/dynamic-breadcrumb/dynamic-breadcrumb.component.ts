import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-dynamic-breadcrumb',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass, NgIf],
  templateUrl: './dynamic-breadcrumb.component.html',
  styleUrls: ['./dynamic-breadcrumb.component.scss'],
})
export class DynamicBreadcrumbComponent {
  breadcrumbs: any[] = [];
  iconBaseUrl: string = 'assets/img/header/';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.handleBreadcrumbs();
  }

  ngOnInit(): void {}

  handleBreadcrumbs(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe({
        next: (data: any) => {
          this.breadcrumbs = data?.breadcrumbs;
        },
      });
  }
}
