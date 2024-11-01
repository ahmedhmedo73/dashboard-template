import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagedResponse, IResponse } from '../models/global.model';
import { Observable } from 'rxjs';
import { ICompanyPermits } from '../models/company-permits';

@Injectable({
  providedIn: 'root',
})
export class CompanyPermitsService {
  constructor(private http: HttpClient) {}
  list(params: {
    [key: string]: string;
  }): Observable<IResponse<IPagedResponse<any>>> {
    return this.http.get<IResponse<IPagedResponse<any>>>(
      `CompanyPermits/GetPaged`,
      {
        params,
      }
    );
  }
  getById(id: string) {
    return this.http.get<IResponse<ICompanyPermits>>(`CompanyPermits/${id}`);
  }
  add(body: any) {
    return this.http.post<IResponse<string>>(`Users`, body);
  }
  addPermitsToVehicles(body: any) {
    return this.http.put<IResponse<string>>(
      `CompanyPermits/AddPermitsToVehicles`,
      body
    );
  }
  sendOtp(body: any) {
    return this.http.post<IResponse<string>>(
      `CompanyPermits/SendVerificationCode`,
      body
    );
  }
  VerifyOptCode(body: any) {
    return this.http.post<IResponse<string>>(
      `CompanyPermits/VerifyVerificationCode`,
      body
    );
  }
  confirmPermitDeliver(body: any) {
    return this.http.put<IResponse<string>>(
      `CompanyPermits/ConfirmPermitDeliver`,
      body
    );
  }
  deleteOne(id: string): any {
    return Observable;
  }

  editOne(body: any): any {
    return Observable;
  }
  addFormData(body: any): any {
    return Observable;
  }
  editFormData(body: any): any {
    return Observable;
  }
  sendConfirmionEmail(body: FormData) {
    return this.http.post<IResponse<string>>(
      `CompanyPermits/SendConfirmionEmail`,
      body
    );
  }
}
