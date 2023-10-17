import { Component, Input } from '@angular/core';
import { itemListInterface } from '../item-list.component';
import { CartDataService } from 'src/app/service/cart-data.service';


@Component({
  selector: 'app-favorite-item-list',
  templateUrl: './favorite-item-list.component.html',
  styleUrls: ['./favorite-item-list.component.css']
})
export class FavoriteItemListComponent {
  @Input() favoriteItem: itemListInterface[] = [];

  constructor(private cartData: CartDataService) { }

  // Remove Favorite  items 
  removeFavoriteItem = (item: itemListInterface) => {
    const index = this.favoriteItem.indexOf(item);
    if (index !== -1) {
      this.favoriteItem.splice(index, 1);
      item.favoriteItem = true;
    };
  };

  // Items add to cart 
  itemAddToCart = (item: itemListInterface) => {
    this.cartData.setCartData(item);
  };
};
