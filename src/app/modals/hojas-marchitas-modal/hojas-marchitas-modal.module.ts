import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasMarchitasModalPageRoutingModule } from './hojas-marchitas-modal-routing.module';

import { HojasMarchitasModalPage } from './hojas-marchitas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasMarchitasModalPageRoutingModule
  ],
  declarations: [HojasMarchitasModalPage]
})
export class HojasMarchitasModalPageModule {}
