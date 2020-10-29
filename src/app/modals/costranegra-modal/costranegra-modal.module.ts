import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostranegraModalPageRoutingModule } from './costranegra-modal-routing.module';

import { CostranegraModalPage } from './costranegra-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostranegraModalPageRoutingModule
  ],
  declarations: [CostranegraModalPage]
})
export class CostranegraModalPageModule {}
