import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoriteItemListComponent } from './item-list/favorite-item-list/favorite-item-list.component';
import { CartItemListComponent } from './item-list/cart-item-list/cart-item-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { checkLoginGuard } from './Auth/check-login.guard';
import { setFormInfoGuard } from './Auth/set-form-info.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'item-list',
        pathMatch: 'full'
    },
    {
        path: 'item-list',
        component: ItemListComponent,
        canActivate: [checkLoginGuard]
    },
    {
        path: 'cart-item-list',
        component: CartItemListComponent,
        canActivate: [checkLoginGuard],
    },
    {
        path: 'favorite-item-list',
        component: FavoriteItemListComponent,
        canActivate: [checkLoginGuard]

    },
    {
        path: 'login',
        component: LoginComponent,
        canDeactivate: [setFormInfoGuard]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
