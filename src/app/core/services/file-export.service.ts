import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileExportService {
  constructor(private http: HttpClient) {}

  getExportElectionCycleReport(id: number): Observable<File> {
    return this.http.get<File>(
      `/Reports/ExportElectionCycleReport?ElectionNumber=${id}`,{
      responseType: 'blob' as any,
    }
    );
  }

  getVotersReportFile(): Observable<Blob> {
    return this.http.get<Blob>('/Reports/GetVotersReportFile', {
      responseType: 'blob' as any,
    });
  }

  getFile() {}
}
