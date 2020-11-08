import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class SharedModule { }
