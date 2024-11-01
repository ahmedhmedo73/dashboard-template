import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  selectedRow: BehaviorSubject<any> = new BehaviorSubject(undefined);
  constructor() {}
}
