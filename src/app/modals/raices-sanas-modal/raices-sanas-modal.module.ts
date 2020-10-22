import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaicesSanasModalPageRoutingModule } from './raices-sanas-modal-routing.module';

import { RaicesSanasModalPage } from './raices-sanas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaicesSanasModalPageRoutingModule
  ],
  declarations: [RaicesSanasModalPage]
})
export class RaicesSanasModalPageModule {}
