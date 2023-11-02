import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbActiveOffcanvas, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ReadMoreLessComponent } from './item-list/read-more-less/read-more-less.component';
import { AddFavoriteComponent } from './item-list/add-favorite/add-favorite.component';
import { FavoriteItemListComponent } from './item-list/favorite-item-list/favorite-item-list.component';
import { CartItemListComponent } from './item-list/cart-item-list/cart-item-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyNowComponent } from './item-list/cart-item-list/buy-now/buy-now.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { LottieModule } from 'ngx-lottie';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';




// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    ReadMoreLessComponent,
    AddFavoriteComponent,
    FavoriteItemListComponent,
    CartItemListComponent,
    BuyNowComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added


  ],

  providers: [NgbActiveModal, NgbActiveOffcanvas, provideAnimations(),
    provideToastr(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
