import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantaspequenasImagePageRoutingModule } from './plantaspequenas-image-routing.module';

import { PlantaspequenasImagePage } from './plantaspequenas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantaspequenasImagePageRoutingModule
  ],
  declarations: [PlantaspequenasImagePage]
})
export class PlantaspequenasImagePageModule {}
