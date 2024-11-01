export interface IVehiclePermitForm {
  id: string;
  serialNumber: string;
  licenceNumber: string;
  ownerNationalId: number;
  permitTypeId: string;
  licenseCopy: File;
}
export interface IVehiclePermitList {
  id: string;
  serialNumber: string;
  licenceNumber: string;
  permitTypeName: string;
  attachmentId: string;
  attachmentName: string;
  ownerNationalId: number;
  permitTypeId: number;
}
