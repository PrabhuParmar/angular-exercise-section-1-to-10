import { Component, Input } from '@angular/core';
import { itemListInterface } from '../item-list.component';
import { FavoriteItemsService } from 'src/app/service/favorite-items.service';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent {
  @Input() selectedData!: itemListInterface;

  constructor(private favoriteItemData: FavoriteItemsService) { }
  // Favorite Item add in service
  favoriteItem = () => {
    this.selectedData.favoriteItem = false;
    this.favoriteItemData.addFavoriteItem(this.selectedData);
  };
};
