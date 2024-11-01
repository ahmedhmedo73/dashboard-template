import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagedResponse, IResponse } from '../models/global.model';
import { Observable } from 'rxjs';
import { IVehiclesReportList } from '../models/vehicles-report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  controler: string = 'Reports';

  constructor(private http: HttpClient) {}

  getDeliveryReport(CompanyPermitId: string) {
    return this.http.get<IResponse<any>>(
      `${this.controler}/GetDeliveryReport`,
      {
        params: { CompanyPermitId },
      }
    );
  }
//vehicles-report-list
  list(params: any): Observable<IResponse<IPagedResponse<IVehiclesReportList[]>>> {
    return this.http.get<IResponse<IPagedResponse<IVehiclesReportList[]>>>(
      `${this.controler}/GetPaged`,
      {
        params,
      }
    );
  }
  exportVehiclesReport(params: any):Observable<IResponse<Blob>>{
      return this.http.get<IResponse<Blob>>(
      `${this.controler}/Export`,
      {
        params,
        responseType: 'blob' as any
      },

    );
  }
}
