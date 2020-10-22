import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntamoradaImagePageRoutingModule } from './puntamorada-image-routing.module';

import { PuntamoradaImagePage } from './puntamorada-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntamoradaImagePageRoutingModule
  ],
  declarations: [PuntamoradaImagePage]
})
export class PuntamoradaImagePageModule {}
