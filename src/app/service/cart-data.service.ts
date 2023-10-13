import { Injectable } from '@angular/core';
import { itemListInterface } from '../product/item-list/item-list.component';

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
    const countProductItem = this.cartItemList.reduce((accumulator: number | any, value: itemListInterface) => {
      return {
        ...accumulator,
        [value.id]: (accumulator[value.id] || 0) + 1,
      };
    }, {});

    this.cartItemList = this.cartItemList.map((item: any) => {
      item["count"] = countProductItem[item.id];
      return item;
    });

    const itemId = this.cartItemList.map(({ id }) => id);
    this.setCartItems = this.cartItemList.filter(({ id }, index) =>
      !itemId.includes(id, index + 1));
  };
};
