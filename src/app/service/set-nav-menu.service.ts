import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetNavMenuService {

  constructor() { }
  // Set Selected Menu 
  selectedMenuOption: string = 'home';
  selectNavMenu = (item: string) => {
    this.selectedMenuOption = item;
  }
}
