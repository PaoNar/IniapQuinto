import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasComidasModalPageRoutingModule } from './hojas-comidas-modal-routing.module';

import { HojasComidasModalPage } from './hojas-comidas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasComidasModalPageRoutingModule
  ],
  declarations: [HojasComidasModalPage]
})
export class HojasComidasModalPageModule {}
