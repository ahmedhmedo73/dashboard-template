export interface IPermitAppointmentList {
  id: string;
  date: string;
  durationId: number;
  quota: number;
  entityTypeId: number;
  staffName: string;
  deliverySiteAddress: string;
  entityTypeName: string;
}

export interface IPermitAppointmentForm {
  date: string;
  durationId: number;
  quota: number;
  staffName: string;
  deliverySiteAddress: string;
}

export interface IPermitDeliverDatesList {
  date: Date;
  durations: IDuration[];
}

export interface IDuration {
  id: string;
  durationId: number;
  durationName: string;
}
