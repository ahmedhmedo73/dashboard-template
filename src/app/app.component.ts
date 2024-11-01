import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './core/services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'perfect-home-dashboard';
  constructor(public translation: TranslationService) {}
  ngOnInit(): void {
    this.translation.setDefaultLang();
  }
}
