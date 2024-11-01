import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagedResponse, IResponse } from '../models/global.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  controler: string = 'Users';
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
    return this.http.delete<IResponse<string>>(`${this.controler}/${id}`);
  }

  editOne(body: any) {
    return this.http.put<IResponse<string>>(this.controler, body);
  }

  changeActivation(body: any) {
    return this.http.put<IResponse<string>>(
      `${this.controler}/ChangeActivation`,
      body
    );
  }

  addFormData(formdata: FormData) {
    return this.http.put<IResponse<string>>(this.controler, formdata);
  }
  editFormData(formdata: FormData) {
    return this.http.put<IResponse<string>>(this.controler, formdata);
  }
  confirm() {
    return this.http.put<IResponse<string>>(this.controler + '/confirm', {});
  }
}
