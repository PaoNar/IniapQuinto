import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulgonesImagePageRoutingModule } from './pulgones-image-routing.module';

import { PulgonesImagePage } from './pulgones-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulgonesImagePageRoutingModule
  ],
  declarations: [PulgonesImagePage]
})
export class PulgonesImagePageModule {}
