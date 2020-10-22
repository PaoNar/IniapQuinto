import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulgonesModalPageRoutingModule } from './pulgones-modal-routing.module';

import { PulgonesModalPage } from './pulgones-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulgonesModalPageRoutingModule
  ],
  declarations: [PulgonesModalPage]
})
export class PulgonesModalPageModule {}
