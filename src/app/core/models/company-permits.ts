export interface ICompanyPermits {
  id: string;
  status: number;
  companyName: string;
  companyLicenseNumber: string;
  companyCommercialNumber: string;
  delegatorName: string;
  delegatorIdentityNumber: string;
  permitVehiclesList: IPermitVehiclesList[];
  isVerfiedCode: boolean;
}

export interface IPermitVehiclesList {
  id: string;
  serialNumber: string;
  licenceNumber: string;
  ownerNationalId: string;
  permitTypeId: number;
  permitTypeName: string;
  permitNumber: string;
  attachmentId: string;
}

export enum CompanyPermitStatusEnum {
  Created = 1, // تم ادخال مركبة
  Confirmed = 2, //حفظ وارسال بيانات المركبة
  Reserved = 3, //تم حجز موعد
  Delivered = 4, //تم التسليم
}
