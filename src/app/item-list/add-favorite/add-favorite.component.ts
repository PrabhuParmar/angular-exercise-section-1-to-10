import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { itemListInterface } from '../item-list.component';
import { CartDataService } from 'src/app/service/cart-data.service';
import { SetFavoriteItemService } from 'src/app/service/set-favorite-item.service';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AddFavoriteComponent implements OnInit {

  @Input() selectedData!: itemListInterface;
  favoriteItemStatus: boolean = true;
  constructor(private CartDataServiceData: CartDataService, private setfavoriteItem: SetFavoriteItemService) { }
  ngOnInit(): void {
    this.setfavoriteItem.favoriteItemList.map((data) => {
      if (this.selectedData.id == data.id) {
        this.selectedData = data;
      };
    });
  };

  // Favorite Item data 
  favoriteItem = () => {
    this.selectedData.favoriteItem = false
    this.setfavoriteItem.addFavoriteItem(this.selectedData);
  };

  // Remove Item 
  removeItem = () => {
    this.setfavoriteItem.removeItem(this.selectedData);
  };
};


