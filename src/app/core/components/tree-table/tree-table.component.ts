import { DatePipe } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { IColumns } from 'src/app/core/models/table.model';
import { BootstrapService } from 'src/app/core/services/bootstrap.service';
import { durationName } from 'src/app/core/enums/permits-appointments.enum';
import { TableService } from 'src/app/core/services/table.service';
import { getArabicWeekday } from 'src/app/core/utilities/date';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss'],
})
export class TreeTableComponent {
  @ContentChild('tableContent') tableContent: any;
  @ContentChild('actions') actions: any;
  @Input() columns: IColumns[][] = [];
  @Input() data: any[] = [];
  @Input() isLoading: boolean = true;
  @Input() hideEdit: boolean = false;
  @Input() hideDelete: boolean = false;
  @Input() isReadonly: boolean = true;
  @Input() filter: any = {};
  @Input() totalCount: number = 0;
  @Input() deleteTitle: string = '';
  @Input() attachmentParentIdKey: string = '';
  @Input() attachmentParentId: string = '';
  @Input() legacyPagination : boolean = false;

  @Output() changeActivationEmitter = new EventEmitter();
  @Output('openDeleteModal') openDeleteModalEmitter = new EventEmitter();
  @Output('deleteItem') deleteItemEmitter = new EventEmitter();
  @Output('handelAddValuePermitVehicles') handelAddValuePermitVehiclesEmitter =
    new EventEmitter();
  @Output('changePagination') changePaginationEmitter =
    new EventEmitter();

  formatedData: any[] = [];
  pageNumber: number = 1;
  url: string = '';
  deleteModal: any;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private bootstrapService: BootstrapService,
    private tableService: TableService,
    private documentService: DocumentService
  ) {
    this.url = router.url.split('?')[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.formateData();
    }
  }
  formateData(): void {
    this.formatedData = this.data.map((row, index) => {
      let data = row;
      data.index = index;
      let children: any[] = [{}];

      this.columns[1].forEach((column: IColumns) => {
        children[0][column.key] = row[column.key];
      });
      return { data, children };
    });
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

  ngAfterViewInit() {
    if (!this.hideDelete) {
      const modal = document.getElementById('removeItem');
      this.deleteModal = new this.bootstrapService.bootstrap.Modal(modal);
    }
  }

  changeActivation(id: string, isActive: boolean): void {
    this.changeActivationEmitter.emit({ id, isActive });
  }

  changePagination(pageNumber: number): void {
    if(this.legacyPagination){
      this.changePaginationEmitter.emit(pageNumber);
    }else{
      this.router.navigate([this.router.url.split('?')[0]], {
        queryParams: { ...this.filter, pageNumber },
      });
    }
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

  formatDate(date: any, showArabicWeekday: boolean = true): string {
    date = new Date(date);
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    return (
      (showArabicWeekday ? getArabicWeekday(date) + ' ' : '') + formattedDate
    );
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
      row?.[this.attachmentParentIdKey] || this.attachmentParentId
    );
    this.isLoading = false;
  }
  handelAddValuePermitVehicles($event: any, index: number) {
    this.handelAddValuePermitVehiclesEmitter.emit({
      value: $event.target.value,
      index,
    });
  }
  ngOnDestroy(): void {
    this.deleteModal?.hide();
    document.getElementById('removeItem')?.remove();
  }
}
