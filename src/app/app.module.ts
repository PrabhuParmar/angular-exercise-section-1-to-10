import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ItemListComponent } from './product/item-list/item-list.component';
import { ReadMoreLessComponent } from './product/item-list/read-more-less/read-more-less.component';
import { AddFavoriteComponent } from './product/item-list/add-favorite/add-favorite.component';
import { FavoriteItemListComponent } from './product/item-list/favorite-item-list/favorite-item-list.component';
import { CartItemListComponent } from './product/item-list/cart-item-list/cart-item-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ItemListComponent,
    ReadMoreLessComponent,
    AddFavoriteComponent,
    FavoriteItemListComponent,
    CartItemListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
