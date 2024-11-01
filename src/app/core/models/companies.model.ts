import { BeneficiarTypesEnum } from '../enums/beneficiarType.enum';

export interface ICompaniesList {
  id: string;
  delegatorName: string;
  delegatorIdentityNumber: string;
  delegatorEmail: string;
  delegatorNumber: string;
  name: string;
  licenseNumber: string;
  commercialNumber: string;
  numberOfBeneficiaries: number;
  isActive: boolean;
  countryId: string;
  mobileNumber: string;
  email: string;
  address: string;
  beneficiarTypeId: number;
  beneficiarTypeName: string;
}

export interface ICompanyDetails {
  delegatorName: string;
  delegatorIdentityNumber: string;
  delegatorEmail: string;
  delegatorNumber: string;
  name: string;
  licenseNumber: string;
  commercialNumber: string;
  numberOfBeneficiaries: number;
  isActive: boolean;
  countryId: string;
  mobileNumber: string;
  email: string;
  address: string;
  beneficiarTypeId: BeneficiarTypesEnum;
  beneficiarTypeName: string;
  countryName: string;
}
