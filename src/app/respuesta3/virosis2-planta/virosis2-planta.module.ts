import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Virosis2PlantaPageRoutingModule } from './virosis2-planta-routing.module';

import { Virosis2PlantaPage } from './virosis2-planta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Virosis2PlantaPageRoutingModule
  ],
  declarations: [Virosis2PlantaPage]
})
export class Virosis2PlantaPageModule {}
