import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-water-mark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './water-mark.component.html',
  styleUrls: ['./water-mark.component.scss'],
})
export class WaterMarkComponent {
  items = new Array(6);
  formattedDate: string = formatDate(
    new Date(),
    'dd/MM/yyyy,HH:mm:ss',
    'en-US'
  );
}
