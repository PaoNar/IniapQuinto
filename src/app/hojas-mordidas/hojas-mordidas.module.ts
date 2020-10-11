import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasMordidasPageRoutingModule } from './hojas-mordidas-routing.module';

import { HojasMordidasPage } from './hojas-mordidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasMordidasPageRoutingModule
  ],
  declarations: [HojasMordidasPage]
})
export class HojasMordidasPageModule {}
