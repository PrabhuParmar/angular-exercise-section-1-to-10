import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FavoriteItemsService } from 'src/app/service/favorite-items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemListComponent implements OnInit {
  favorite!: itemListInterface | any;

  // Item List Array
  itemlist: itemListInterface[] = [
    {
      id: 1,
      image: '../../../assets/Image/lewelMen.webp',
      name: ' Hooded Shirt',
      price: 200,
      description: 'LEWEL Men Checked Slim Fit Hooded Shirt For Men Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium reprehenderit nisi excepturi, esse asperiores quis deserunt sint fugit similique quae numquam nobis velit autem dicta quam! Aliquid, quaerat. Ad!',
      item_add_date: " 15 / 11 / 2023",
      favoriteItem: true,
    },
    {
      id: 2,
      image: '../../../assets/Image/shirtPowerlook.webp',
      name: 'Light Grey',
      description: 'Powerlook Men Light Grey Oversized Chest Pocket Solid Casual ShirtsPowerlook',
      price: 600,
      item_add_date: "1 / 12 / 2023",
      favoriteItem: true,
    },
    {
      id: 3,
      image: '../../../assets/Image/pwerlookwhite.webp',
      name: 'White shirt',
      description: 'Powerlook Men White Oversized Vertical Striped Structured Fabric ShirtsPowerlook',
      price: 200,
      item_add_date: "10 / 12 / 2020",
      favoriteItem: true,
    },
    {
      id: 4,
      image: '../../../assets/Image//blackshirt.webp',
      name: 'Black Sirt',
      description: 'HERE&NOW Men Black Slim Fit Casual Shirt by Myntra',
      price: 200,
      item_add_date: "08 / 12 / 2023",
      favoriteItem: true,
    },
    {
      id: 5,
      image: '../../../assets/Image/lymio.webp',
      name: 'Lymio Casual Shirt',
      description: 'Lymio Casual Shirt for Men| Shirt for Men',
      price: 800,
      item_add_date: "25 / 6 / 2023",
      favoriteItem: true,
    },
    {
      id: 6,
      image: '../../../assets/Image/dennis lingo.webp',
      name: 'Cotton shirt',
      description: 'Dennis Lingo Mens Cotton Solid Slim Fit Casual Shirt with Pocket',
      price: 200,
      item_add_date: "10 / 11 / 2023",
      favoriteItem: true,
    },
    {
      id: 7,
      image: '../../../assets/Image/whiteTshirt.webp',
      name: 'Relaxed Fit Hoodie',
      description: 'Men H&M White Relaxed Fit Hoodie',
      price: 450,
      item_add_date: "25 / 12 / 2023",
      favoriteItem: true,
    },

  ];

  constructor(private favoriteItemData: FavoriteItemsService) {
    this.favorite = favoriteItemData.favoriteItemList;
  };

  ngOnInit(): void {

    this.itemlist.map((data) => {
      let dateArr = data.item_add_date.split('/');
      let year = parseFloat(dateArr[2]);
      let month = parseFloat(dateArr[1]) - 1;
      let day = parseFloat(dateArr[0]);

      let articleDate = new Date(year, month, day);
      data.item_add_date = articleDate.toLocaleDateString();
    });

    // Set Add Favortite Items 
    this.favorite.map((item: any) => {
      this.itemlist.splice(item.id - 1, 1, item);
    });

    // Date Wise Sorting 
    this.itemlist.sort(
      (current, next) => (Number(new Date(next.item_add_date))) - (Number(new Date(current.item_add_date)))
    );
  };
};

// Item list Interface 
export interface itemListInterface {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  item_add_date: string | any;
  favoriteItem?: boolean;
  count?: number;
};
