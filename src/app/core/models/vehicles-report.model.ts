
export interface IVehiclesReportList {
  id: string;
  companyName: string;
  companyLicenseNumber: string;
  beneficiarTypeName: string;
  delegatorName: string;
  delegatorIdentityNumber: string;
  licenceNumber: string;
  serialNumber: string;
  driverNationalId: string;
  driverName: string;
  driverBirthdate: string;
  driverMobileNumber: string;
  permitTypeName: string;
  permitNumber: string;
}

export interface IVehiclesReportSearch{
  entityTypeId:number;
  companyName:string;
  permitType:number;
  companyLicenseNumber:string;
  delegatorName:string;
  delegatorNationalId:string;
  permitNumber:string;
  vehicleLicenseNumber:string;
  vehicleSerialNumber:string;
  driverNationalId:string;
  driverName:string;
  driverMobileNumber:string;
  driverBirthdate:Date;
}


