import { Component } from '@angular/core';
import { itemListInterface } from '../item-list.component';
import { CartDataService } from 'src/app/service/cart-data.service';
import { SetFavoriteItemService } from 'src/app/service/set-favorite-item.service';


@Component({
  selector: 'app-favorite-item-list',
  templateUrl: './favorite-item-list.component.html',
  styleUrls: ['./favorite-item-list.component.css']
})
export class FavoriteItemListComponent {
  favoriteItem: itemListInterface[] = []
  constructor(private cartData: CartDataService, private setfavoriteItem: SetFavoriteItemService) {
    this.favoriteItem = setfavoriteItem.favoriteItemList;
  };

  // Remove Favorite  items 
  removeFavoriteItem = (item: itemListInterface) => {
    this.setfavoriteItem.removeItem(item)
  };

  // Items add to cart 
  itemAddToCart = (item: itemListInterface) => {
    this.cartData.setCartData(item);
  };
};
