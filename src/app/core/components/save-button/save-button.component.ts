import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss',
})
export class SaveButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() formValid: boolean = true;

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
  onSubmit(): void {
    this.cancel.emit();
  }
}
