import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaTuberculoPageRoutingModule } from './respuesta-tuberculo-routing.module';

import { RespuestaTuberculoPage } from './respuesta-tuberculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaTuberculoPageRoutingModule
  ],
  declarations: [RespuestaTuberculoPage]
})
export class RespuestaTuberculoPageModule {}
