import { Injectable } from '@angular/core';
import { itemListInterface } from '../item-main-container/item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  cartItemList: itemListInterface[] = [];
  setCartItems: itemListInterface[] = [];
  setCartData = (item: itemListInterface) => {
    this.cartItemList.push(item);
    // set Quantity To cart
    const countProductItem = this.cartItemList.reduce((setQuantity: number | any, value: itemListInterface) => {
      return {
        ...setQuantity,
        [value.id]: (setQuantity[value.id] || 0) + 1,
      };
    }, {});

    this.cartItemList = this.cartItemList.map((item: itemListInterface) => {
      item["count"] = countProductItem[item.id];
      return item;
    });

    // Filter Same object 
    const itemId = this.cartItemList.map(({ id }) => id);
    this.setCartItems = this.cartItemList.filter(({ id }, index) =>
      !itemId.includes(id, index + 1));
  };
};
