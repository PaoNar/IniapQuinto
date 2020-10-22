import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeficienciasnutricionalesModalPageRoutingModule } from './deficienciasnutricionales-modal-routing.module';

import { DeficienciasnutricionalesModalPage } from './deficienciasnutricionales-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeficienciasnutricionalesModalPageRoutingModule
  ],
  declarations: [DeficienciasnutricionalesModalPage]
})
export class DeficienciasnutricionalesModalPageModule {}
