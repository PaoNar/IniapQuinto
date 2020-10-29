import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntamoradaModalPageRoutingModule } from './puntamorada-modal-routing.module';

import { PuntamoradaModalPage } from './puntamorada-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntamoradaModalPageRoutingModule
  ],
  declarations: [PuntamoradaModalPage]
})
export class PuntamoradaModalPageModule {}
