import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasMinadasModalPageRoutingModule } from './hojas-minadas-modal-routing.module';

import { HojasMinadasModalPage } from './hojas-minadas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasMinadasModalPageRoutingModule
  ],
  declarations: [HojasMinadasModalPage]
})
export class HojasMinadasModalPageModule {}
