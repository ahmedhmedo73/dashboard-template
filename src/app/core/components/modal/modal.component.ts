import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalId!: string;
  @Input() modalType: 'confirm' | 'info' = 'confirm';
  @Input() title!: string;
  @Input() icon: string = 'img/icons/white-check-circle.svg';
  @Input() confirmBtnTitle: string = 'تأكيد الحذف';
  @Output() deleteBtnClicked: EventEmitter<void> = new EventEmitter<void>();
}
