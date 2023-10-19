import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ItemMainContainer } from './item-main-container/item-main-container';
import { ItemListComponent } from './item-main-container/item-list/item-list.component';
import { ReadMoreLessComponent } from './item-main-container/item-list/read-more-less/read-more-less.component';
import { AddFavoriteComponent } from './item-main-container/item-list/add-favorite/add-favorite.component';
import { FavoriteItemListComponent } from './item-main-container/item-list/favorite-item-list/favorite-item-list.component';
import { CartItemListComponent } from './item-main-container/item-list/cart-item-list/cart-item-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyNowComponent } from './item-main-container/item-list/cart-item-list/buy-now/buy-now.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { LottieModule } from 'ngx-lottie';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemMainContainer,
    ItemListComponent,
    ReadMoreLessComponent,
    AddFavoriteComponent,
    FavoriteItemListComponent,
    CartItemListComponent,
    BuyNowComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
