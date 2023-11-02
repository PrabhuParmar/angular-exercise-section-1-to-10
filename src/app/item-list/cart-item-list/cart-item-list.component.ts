import { Component, ViewChild } from '@angular/core';
import { CartDataService } from 'src/app/service/cart-data.service';
import { itemListInterface } from '../item-list.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent {

  @ViewChild(BuyNowComponent) buyNowItem!: BuyNowComponent

  cartItemList: itemListInterface[] = [];
  itemBuyNow: itemListInterface[] | any = []
  constructor(private cartData: CartDataService) {
    this.cartItemList = this.cartData.setCartItems;
  };

  buyNow = (data: itemListInterface) => {
    this.itemBuyNow = data;
    this.buyNowItem.customerForm.reset();
  };
};