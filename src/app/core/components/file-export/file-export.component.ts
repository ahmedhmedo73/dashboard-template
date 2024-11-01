import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FileExportService } from 'src/app/core/services/file-export.service';

type ExportServiceType = (id?: number) => Observable<File>;
@Component({
  selector: 'app-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.scss'],
})
export class FileExportComponent {
  submitted: boolean = false;
  isLoading: boolean = false;
  @Input() fileName: string = 'report';
  @Input() disabled: boolean = false;
  @Input() exportFunction!: Observable<Blob>;
  constructor(private fileExportService: FileExportService) {}

  handleExport() {
    const check: Observable<Blob> = this.exportFunction;
    check.subscribe({
      next: (file: any) => {
        const blob = new Blob([file], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${this.fileName}.xlsx` as string;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    });
  }
}
