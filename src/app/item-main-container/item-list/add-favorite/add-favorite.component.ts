import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { itemListInterface } from '../item-list.component';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AddFavoriteComponent {
  @Input() selectedData!: itemListInterface;
  @Output() setfavoriteItemData = new EventEmitter<any>();

  // Favorite Item data 
  favoriteItem = () => {
    this.selectedData.favoriteItem = false;
    this.setfavoriteItemData.emit(this.selectedData);
  };
};


