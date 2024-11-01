import { BeneficiarTypesEnum } from '../enums/beneficiarType.enum';
import { TypeIdEnum } from '../enums/home.enum';

export interface IStatisticBox {
  typeId: TypeIdEnum;
  name: string;
  count: number;
  beneficiarTypeId: BeneficiarTypesEnum;
}
