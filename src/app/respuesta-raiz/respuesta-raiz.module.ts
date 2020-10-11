import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaRaizPageRoutingModule } from './respuesta-raiz-routing.module';

import { RespuestaRaizPage } from './respuesta-raiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaRaizPageRoutingModule
  ],
  declarations: [RespuestaRaizPage]
})
export class RespuestaRaizPageModule {}
