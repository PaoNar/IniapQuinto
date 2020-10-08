import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaHojasPageRoutingModule } from './respuesta-hojas-routing.module';

import { RespuestaHojasPage } from './respuesta-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaHojasPageRoutingModule
  ],
  declarations: [RespuestaHojasPage]
})
export class RespuestaHojasPageModule {}
