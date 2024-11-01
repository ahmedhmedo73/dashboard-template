import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  isOpen: boolean = false;
  toggleSideMenu() {
    this.isOpen = !this.isOpen;
  }
}
