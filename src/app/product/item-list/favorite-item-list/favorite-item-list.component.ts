import { Component } from '@angular/core';
import { itemListInterface } from '../item-list.component';
import { CartDataService } from 'src/app/service/cart-data.service';
import { FavoriteItemsService } from 'src/app/service/favorite-items.service';

@Component({
  selector: 'app-favorite-item-list',
  templateUrl: './favorite-item-list.component.html',
  styleUrls: ['./favorite-item-list.component.css']
})
export class FavoriteItemListComponent {
  favoriteItemListData: itemListInterface[];

  constructor(private cartData: CartDataService, private favoriteItemData: FavoriteItemsService) {
    this.favoriteItemListData = favoriteItemData.favoriteItemList
  };

  // Remove Favorite  items 
  removeFavoriteItem = (item: itemListInterface) => {
    const index = this.favoriteItemListData.indexOf(item);
    if (index !== -1) {
      this.favoriteItemListData.splice(index, 1);
    };
  };

  // Items add to cart 
  itemAddToCart = (item: itemListInterface) => {
    this.cartData.setCartData(item);
  };
};
