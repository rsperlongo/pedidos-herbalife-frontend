import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';

import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    CollapseModule.forRoot(),
  ]
})
export class CartModule { }
