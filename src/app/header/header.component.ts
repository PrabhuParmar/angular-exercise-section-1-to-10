import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedMenuOption: string = 'home';
  @Output() selectedPage = new EventEmitter<string>();

  // select Menu Option 
  onSelect = (item: string) => {
    this.selectedMenuOption = item;
    this.selectedPage.emit(this.selectedMenuOption);
  };
};
