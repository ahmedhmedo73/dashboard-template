import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
