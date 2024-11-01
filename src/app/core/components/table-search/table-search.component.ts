import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TextInputComponent } from '../text-input/text-input.component';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-search',
  standalone: true,
  imports: [
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    TranslateModule,
  ],
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
})
export class TableSearchComponent {
  @Input() placeholder!: string;
  @Input() filter: any = {};
  @Output('onSearch') onSearchEmitter: EventEmitter<any> = new EventEmitter();

  form: FormGroup = new FormGroup({
    searchKeyword: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.handleQueryParams();
  }

  handleQueryParams(): void {
    const searchKeyword = this.router.parseUrl(this.router.url).queryParams[
      'scaearchKeyword'
    ];
    this.form.patchValue({ searchKeyword });
  }
  onSearch() {
    this.onSearchEmitter.emit(this.form.value.searchKeyword);
  }
}
