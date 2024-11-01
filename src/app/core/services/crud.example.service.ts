import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagedResponse, IResponse } from '../models/global.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegulationGroupService {
  constructor(private http: HttpClient) {}

  list(
    pageSize: number,
    pageNumber: number,
    filter?: { [key: string]: string }
  ): Observable<IResponse<IPagedResponse<any[]>>> {
    let url = `/RegulationGroup/GetRegulationGroupsList?PageNumber=${pageNumber}&PageSize=${pageSize}`;

    if (filter) {
      for (let key in filter) {
        if (Object.prototype.hasOwnProperty.call(filter, key)) {
          const value = filter[key];
          // TODO: Refactor
          if (key === 'keyword') key = 'Filter';
          if (value) url = url.concat(`&${key}=${value}`);
        }
      }
    }

    return this.http.get<IResponse<IPagedResponse<any[]>>>(url);
  }

  getById(id: string) {
    return this.http.get<IResponse<any>>(
      `/RegulationGroup/GetRegulationGroup/${id}`
    );
  }

  add(body: any) {
    return this.http.post<IResponse<string>>(
      `/RegulationGroup/AddRegulationGroup`,
      body
    );
  }

  deleteOne(id: string) {
    return this.http.delete<IResponse<string>>(
      `/RegulationGroup/DeleteRegulationGroup?id=${id}`
    );
  }

  editOne(body: any) {
    return this.http.put<IResponse<string>>(
      `/RegulationGroup/EditRegulationGroup`,
      body
    );
  }
}
