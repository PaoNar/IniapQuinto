import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasPequenasPageRoutingModule } from './plantas-pequenas-routing.module';

import { PlantasPequenasPage } from './plantas-pequenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasPequenasPageRoutingModule
  ],
  declarations: [PlantasPequenasPage]
})
export class PlantasPequenasPageModule {}
