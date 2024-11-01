import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagedResponse, IResponse } from '../models/global.model';
import { Observable } from 'rxjs';
import { IPermitDeliverDatesList } from '../models/permits-appointments.model';

@Injectable({
  providedIn: 'root',
})
export class PermitsAppointmentsService {
  controler: string = 'PermitDeliverySchedules';
  constructor(private http: HttpClient) {}

  list(params: {
    [key: string]: string;
  }): Observable<IResponse<IPagedResponse<any[]>>> {
    return this.http.get<IResponse<IPagedResponse<any[]>>>(
      `${this.controler}/GetPaged`,
      {
        params,
      }
    );
  }

  getById(id: string) {
    return this.http.get<IResponse<any>>(`${this.controler}/${id}`);
  }

  add(body: any) {
    return this.http.post<IResponse<string>>(this.controler, body);
  }

  deleteOne(id: string) {
    return this.http.delete<IResponse<string>>(this.controler + `/${id}`);
  }

  editOne(body: any) {
    return this.http.put<IResponse<string>>(this.controler, body);
  }
  addFormData(formdata: FormData) {
    return this.http.put<IResponse<string>>(`dummy`, formdata);
  }
  editFormData(formdata: FormData) {
    return this.http.put<IResponse<string>>(`dummy`, formdata);
  }

  booking(body: any) {
    return this.http.put<IResponse<string>>(this.controler + '/Booking', body);
  }

  getPermitDeliverDatesList() {
    return this.http.get<IResponse<IPermitDeliverDatesList[]>>(
      this.controler + '/GetPermitDeliverDatesList'
    );
  }
}
