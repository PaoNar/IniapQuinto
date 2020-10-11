import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntamoradaPageRoutingModule } from './puntamorada-routing.module';

import { PuntamoradaPage } from './puntamorada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntamoradaPageRoutingModule
  ],
  declarations: [PuntamoradaPage]
})
export class PuntamoradaPageModule {}
