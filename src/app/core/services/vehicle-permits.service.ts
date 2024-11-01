import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, IPagedResponse } from '../models/global.model';
import { IVehiclePermitList } from '../models/vehicle-permits.model';

@Injectable({
  providedIn: 'root',
})
export class VehiclePermitsService {
  controler: string = 'Vehicles';
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
    return this.http.post<IResponse<string>>(`${this.controler}`, body);
  }
  addFormData(formData: FormData) {
    return this.http.post<IResponse<string>>(`${this.controler}`, formData);
  }

  deleteOne(id: string) {
    return this.http.delete<IResponse<string>>(`${this.controler}/${id}`);
  }

  editOne(body: any) {
    return this.http.put<IResponse<string>>(`${this.controler}`, body);
  }

  editFormData(formData: FormData) {
    return this.http.put<IResponse<string>>(`${this.controler}`, formData);
  }
}
