import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILookup, ILookupsResponse, IResponse } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  durations: ILookup[] = [
    {
      name: 'صباحية',
      value: 1,
    },
    {
      name: 'مسائية',
      value: 2,
    },
  ];
  _roles: ILookup[] = [];
  _entityTypes: ILookup[] = [];

  constructor(private http: HttpClient) {}

  get roles(): ILookup[] {
    return this._roles;
  }

  get entityTypes(): ILookup[] {
    return this._entityTypes;
  }

  getLookups(catalog: number = 1) {
    return this.http.get<IResponse<ILookupsResponse>>(
      `Lookup/GetLookups?Catalog=${catalog}`
    );
  }

  handleGetLookups() {
    this.getLookups().subscribe({
      next: (res) => {
        this._roles = res.result.roles;
        this._entityTypes = res.result.entityTypes;
      },
    });
  }
}
