import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(
      m => m.HomeModule
    )
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(
      m => m.OrderModule
    )
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(
      m => m.CartModule
    )
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
