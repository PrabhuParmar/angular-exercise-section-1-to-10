import { Component } from '@angular/core';
import { CartDataService } from 'src/app/service/cart-data.service';
import { itemListInterface } from '../item-list.component';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent {
  cartItemList: itemListInterface[] = [];
  constructor(private cartData: CartDataService) {
    this.cartItemList = this.cartData.setCartItems;
  };
};
