export interface IUserList {
  id: string;
  name: string;
  email: string;
  mobile: string;
  isActive: boolean;
}

export interface IUserForm {
  name: string;
  mobileNumber: string;
  identityNumber: string;
  email: string;
  userName: string;
  isActive: boolean;
  roleId: number;
  entityTypeId: number;
  notes: string;
}
