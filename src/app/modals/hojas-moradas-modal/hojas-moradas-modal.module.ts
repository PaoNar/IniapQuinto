import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasMoradasModalPageRoutingModule } from './hojas-moradas-modal-routing.module';

import { HojasMoradasModalPage } from './hojas-moradas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasMoradasModalPageRoutingModule
  ],
  declarations: [HojasMoradasModalPage]
})
export class HojasMoradasModalPageModule {}
