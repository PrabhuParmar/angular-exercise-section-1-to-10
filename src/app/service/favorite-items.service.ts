import { Injectable } from '@angular/core';
import { itemListInterface } from '../product/item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService {

  constructor() { }
  favoriteItemList: itemListInterface[] = [];

  addFavoriteItem = (favoriteItem: itemListInterface) => {
    this.favoriteItemList.push(favoriteItem);
  };
};
