import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, IPagedResponse } from '../models/global.model';
import { ICompanyDetailsForm } from '../models/company-details.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailsService {
  controler: string = 'Delegator';
  constructor(private http: HttpClient) {}

  getCompanyDetails() {
    return this.http.get<IResponse<ICompanyDetailsForm>>(
      `${this.controler}/Details`
    );
  }
  confirmDelegator() {
    return this.http.put<IResponse<any>>(`${this.controler}/Confirm`, {});
  }
  getDelegatorStatus() {
    return this.http.get<IResponse<any>>(`${this.controler}/GetStatus`, {});
  }
}
