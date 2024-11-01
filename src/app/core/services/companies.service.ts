import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPagedResponse, IResponse } from 'src/app/core/models/global.model';
import { ICompaniesList } from '../models/companies.model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  controler: string = 'Companies';
  constructor(private http: HttpClient) {}
  list(params: {
    [key: string]: string;
  }): Observable<IResponse<IPagedResponse<ICompaniesList[]>>> {
    return this.http.get<IResponse<IPagedResponse<ICompaniesList[]>>>(
      `${this.controler}/GetPaged`,
      {
        params,
      }
    );
  }

  getById(id: string) {
    return this.http.get<IResponse<any>>(`${this.controler}/${id}`);
  }
}
