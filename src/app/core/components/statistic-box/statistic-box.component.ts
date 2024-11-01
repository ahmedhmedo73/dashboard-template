import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BeneficiarTypesEnum } from 'src/app/core/enums/beneficiarType.enum';
import { TypeIdEnum } from 'src/app/core/enums/home.enum';
import { IStatisticBox } from 'src/app/core/models/home.model';

@Component({
  selector: 'app-statistic-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistic-box.component.html',
  styleUrls: ['./statistic-box.component.scss'],
})
export class StatisticBoxComponent {
  @Input() statistic?: IStatisticBox;
  constIconSrc = {
    [TypeIdEnum.Users]: '/img/statistics/users.svg',
    [TypeIdEnum.Companies]: {
      [BeneficiarTypesEnum.InternalHajj]: '/img/statistics/inner-hajjs.svg',
      [BeneficiarTypesEnum.ExternalHajj]: '/img/statistics/outer-hajjs.svg',
      [BeneficiarTypesEnum.HajjAffairsOffices]:
        '/img/statistics/management.svg',
      [BeneficiarTypesEnum.TransportCompanies]: '/img/statistics/transport.svg',
    },
    [TypeIdEnum.Requests]: '/img/statistics/requests.svg',
  } as const;

  getIconSrc(): string {
    if (this.statistic) {
      if (this.statistic?.typeId != TypeIdEnum.Companies) {
        return this.constIconSrc[this.statistic.typeId];
      } else {
        return this.constIconSrc[this.statistic.typeId][
          this.statistic.beneficiarTypeId
        ];
      }
    }
    return '';
  }
}
