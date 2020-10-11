import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaTallosPageRoutingModule } from './respuesta-tallos-routing.module';

import { RespuestaTallosPage } from './respuesta-tallos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaTallosPageRoutingModule
  ],
  declarations: [RespuestaTallosPage]
})
export class RespuestaTallosPageModule {}
