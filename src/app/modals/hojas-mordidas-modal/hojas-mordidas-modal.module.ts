import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasMordidasModalPageRoutingModule } from './hojas-mordidas-modal-routing.module';

import { HojasMordidasModalPage } from './hojas-mordidas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasMordidasModalPageRoutingModule
  ],
  declarations: [HojasMordidasModalPage]
})
export class HojasMordidasModalPageModule {}
