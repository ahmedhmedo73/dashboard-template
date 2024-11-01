import { Observable } from 'rxjs';
import { IPagedResponse, IResponse } from '../models/global.model';

export interface IService<T> {
  list: (filter: {
    [key: string]: string;
  }) => Observable<IResponse<IPagedResponse<T[]>>>;
  // getById: (id: string) => any;
  // add: (body: IGeographicScope) => any;
  deleteOne?: (id: string) => Observable<IResponse<string>>;
  changeActivation?: (body: { id: string }) => Observable<IResponse<string>>;
  // editOne: (body: IGeographicScope) => any;
}

export class List<T> {
  // TODO: Refactor services and create interface.
  service!: IService<T>;

  isLoading = true;
  searchWord: any = {};
  totalCount = 0;
  pageNumber = 1;
  totalPages = 0;
  pageSize = 10;
  hasPreviousPage = false;
  hasNextPage = false;
  items: T[] = [];
  deletId = '';
  currentFilter: any = { pageNumber: 1, pageSize: 10 };

  entityId = '';

  get entityForEdit() {
    return this.entityId;
  }

  constructor(service: IService<T>) {
    this.service = service;
  }

  getItems() {
    this.isLoading = true;

    this.service.list(this.currentFilter).subscribe({
      next: (res) => {
        this.totalCount = res.result.totalCount;
        this.currentFilter.pageNumber = res.result.pageNumber;
        this.totalPages = res.result.totalPages;
        this.hasPreviousPage = res.result.hasPreviousPage;
        this.hasNextPage = res.result.hasNextPage;

        this.items = res.result.items;
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openDeleteModal({ id, deleteModal }: { id: string; deleteModal: any }) {
    this.deletId = id;
    deleteModal.show();
  }

  deleteItem(deleteModal: any) {
    this.service.deleteOne!(this.deletId).subscribe({
      next: () => {
        // this.toaster.success(res.result);
        deleteModal.hide();
        this.getItems();
        this.deletId = '';
      },
    });
  }
}
