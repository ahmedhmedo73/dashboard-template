export interface IResponse<T> {
  success: boolean;
  errors: Error[];
  result: T;
  model: T;
}

export interface IRoleBaladyas extends ILookup {
  geographicScopes: ILookup[];
  auditTypes: ILookup[];
}

export interface IPagedResponse<T> {
  totalCount: number;
  pageNumber: number;
  totalPages: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  items: T;
}

export interface Error {
  code: number;
  msg: string;
}

export interface ILookupsResponse {
  roles: ILookup[];
  entityTypes: ILookup[];
}
export interface ILookup {
  name: string;
  value: any;
}
