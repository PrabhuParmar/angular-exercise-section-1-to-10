import { Injectable } from '@angular/core';
import { itemListInterface } from '../item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class SetFavoriteItemService {

  constructor() { }
  favoriteItemList: itemListInterface[] = [];

  // Add Favorite Ite, 
  addFavoriteItem = (item: itemListInterface) => {
    this.favoriteItemList.push(item)
  }

  // Remove Item 
  removeItem = (item: itemListInterface) => {
    const index = this.favoriteItemList.indexOf(item);
    if (index !== -1) {
      this.favoriteItemList.splice(index, 1);
      item.favoriteItem = true;
    };
  }
}
