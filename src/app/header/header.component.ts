import { AfterContentChecked, Component } from '@angular/core';
import { SetNavMenuService } from '../service/set-nav-menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentChecked {
  selectedMenuOption: string = 'home';
  constructor(private setNavMenu: SetNavMenuService) { }
  // select Menu Option 
  onSelect = (item: string) => {
    this.setNavMenu.selectNavMenu(item)
    this.selectedMenuOption = item;
  };
  ngAfterContentChecked(): void {
    this.selectedMenuOption = this.setNavMenu.selectedMenuOption
  }
};
