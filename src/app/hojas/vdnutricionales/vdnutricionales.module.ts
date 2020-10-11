import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdnutricionalesPageRoutingModule } from './vdnutricionales-routing.module';

import { VdnutricionalesPage } from './vdnutricionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdnutricionalesPageRoutingModule
  ],
  declarations: [VdnutricionalesPage]
})
export class VdnutricionalesPageModule {}
