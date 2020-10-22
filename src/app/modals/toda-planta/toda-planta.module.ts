import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodaPlantaPageRoutingModule } from './toda-planta-routing.module';

import { TodaPlantaPage } from './toda-planta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaPlantaPageRoutingModule
  ],
  declarations: [TodaPlantaPage]
})
export class TodaPlantaPageModule {}
