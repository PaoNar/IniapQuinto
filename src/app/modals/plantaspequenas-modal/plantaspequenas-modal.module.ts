import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantaspequenasModalPageRoutingModule } from './plantaspequenas-modal-routing.module';

import { PlantaspequenasModalPage } from './plantaspequenas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantaspequenasModalPageRoutingModule
  ],
  declarations: [PlantaspequenasModalPage]
})
export class PlantaspequenasModalPageModule {}
