import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StatisticBoxComponent } from 'src/app/core/components/statistic-box/statistic-box.component';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatisticBoxComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  statistics: any = [];
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getHomePage().subscribe({
      next: (res) => {
        this.statistics = res.result;
      },
    });
  }
}
