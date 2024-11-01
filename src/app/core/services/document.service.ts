import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  uploadDocument(fd: FormData) {
    const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

    return this.http.post<IResponse<{ documentId: string; parentId: string }>>(
      '/Document/UploadDocument',
      fd,
      { headers }
    );
  }

  getFile(AttachmentId: string, ParentId: string) {
    return this.http.get<
      IResponse<{
        file: string;
        contentType: string;
        fileName: string;
      }>
    >(`v1/Attachment/Download`, {
      params: { ParentId, AttachmentId },
    });
  }

  async downLoadImage(documentId: string, parentId: string) {
    try {
      const res: any = await this.getFile(documentId, parentId).toPromise();

      const src = `data:${res.result.contentType};base64,${res.result.file}`;
      let a = document.createElement('a');
      console.log(src);

      a.href = src;
      a.download = res.result.fileName;
      a.click();
    } catch (err) {
      console.log(err);
    }
  }
}
