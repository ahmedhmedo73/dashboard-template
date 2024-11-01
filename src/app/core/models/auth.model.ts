import { UserRoles } from '../enums/app.enum';
import { BeneficiarTypesEnum } from '../enums/beneficiarType.enum';

export interface ILoginResponse {
  result: IUser;
  success: boolean;
  message: string;
  statusCode: number;
  modelList: null;
}

export interface IUser {
  userId: string;
  name: string;
  email: string;
  authenticationToken: string;
  roleName: string;
  entityTypeName: string;
  roleId: UserRoles;
  entityTypeId: number;
  tokenExpInMin: number;
  permissions: string[];
  isAbleToManage: boolean;
  isConfirmed: boolean;
  beneficiarTypeId: BeneficiarTypesEnum;
}
