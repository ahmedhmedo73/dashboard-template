import { VehiclePermitsStatus } from '../enums/vehicle-permits.enum';

export interface ICompanyDetailsForm {
  id: string;
  name: string;
  countryName: string;
  mobileNumber: string;
  beneficiarTypeId?: number;
  beneficiarType: string;
  numberOfBeneficiaries?: number;
  status: VehiclePermitsStatus | null;
  permitsConfig: PermitsConfig[];
}

export interface PermitsConfig {
  permitType: number;
  permitTypeName: string;
  totalNumberOfPermits: number;
  numberOfPermits: number;
}
