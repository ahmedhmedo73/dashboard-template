import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IColumns } from 'src/app/core/models/table.model';
import { TableService } from 'src/app/core/services/table.service';
import { getArabicWeekday } from 'src/app/core/utilities/date';
import { DocumentService } from 'src/app/core/services/document.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from '../modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxPaginationModule,
    ModalComponent,
    TranslateModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ContentChild('tableContent') tableContent: any;
  @ContentChild('actions') actions: any;
  @Input() columns: IColumns[] = [];
  @Input() rows: any[] = [];
  @Input() isLoading: boolean = true;
  @Input() hideEdit: boolean = false;
  @Input() hideDelete: boolean = false;
  @Input() filter: any = {};
  @Input() totalCount: number = 0;
  @Input() deleteTitle: string = '';
  @Input() attachmentParentIdKey: string = '';
  @Output() changeActivationEmitter = new EventEmitter();
  @Output('openDeleteModal') openDeleteModalEmitter = new EventEmitter();
  @Output('deleteItem') deleteItemEmitter = new EventEmitter();

  pageNumber: number = 1;
  url: string = '';
  deleteModal: any;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private tableService: TableService,
    private documentService: DocumentService
  ) {
    this.url = router.url.split('?')[0];
  }

  shouldCombining(text: string, row: any): any {
    const [firstCombiningKey, secondCombiningKey] = text.split('+');
    if (row[firstCombiningKey.trim()]) {
      return (
        this.formatDate(row[firstCombiningKey.trim()]) +
        ' ' +
        [row[secondCombiningKey.trim()]]
      );
    }
    return '-';
  }

  changeActivation(id: string, isActive: boolean): void {
    this.changeActivationEmitter.emit({ id, isActive });
  }

  changePagination(pageNumber: number): void {
    this.router.navigate([this.router.url.split('?')[0]], {
      queryParams: { ...this.filter, pageNumber },
    });
  }
  openDeleteModal(id: string): void {
    this.openDeleteModalEmitter.emit({ id, deleteModal: this.deleteModal });
  }
  deleteItem(): void {
    this.deleteItemEmitter.emit(this.deleteModal);
  }
  calculateSerialNumber(index: number): number {
    return index + 1 + (this.filter.pageNumber - 1) * 10;
  }

  formatDate(date: any): string {
    date = new Date(date);
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    return getArabicWeekday(date) + ' ' + formattedDate;
  }
  getValue(row: any, key: string) {
    return row[key];
  }
  editRow(row: any): void {
    this.tableService.selectedRow.next(row);
  }
  async handleDownLoadImage(row: any) {
    this.isLoading = true;
    await this.documentService.downLoadImage(
      row['attachmentId'],
      row?.[this.attachmentParentIdKey]
    );
    this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.deleteModal?.hide();
    document.getElementById('removeItem')?.remove();
  }
}
