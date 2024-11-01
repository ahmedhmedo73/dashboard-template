import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getHomePage() {
    return this.http.get<IResponse<any>>('HomePage');
  }
}
