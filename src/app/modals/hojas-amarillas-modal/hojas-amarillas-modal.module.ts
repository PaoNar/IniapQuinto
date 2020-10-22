import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasAmarillasModalPageRoutingModule } from './hojas-amarillas-modal-routing.module';

import { HojasAmarillasModalPage } from './hojas-amarillas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasAmarillasModalPageRoutingModule
  ],
  declarations: [HojasAmarillasModalPage]
})
export class HojasAmarillasModalPageModule {}
