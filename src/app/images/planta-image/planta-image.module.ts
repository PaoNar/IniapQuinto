import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantaImagePageRoutingModule } from './planta-image-routing.module';

import { PlantaImagePage } from './planta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantaImagePageRoutingModule
  ],
  declarations: [PlantaImagePage]
})
export class PlantaImagePageModule {}
