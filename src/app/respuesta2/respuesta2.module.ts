import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Respuesta2PageRoutingModule } from './respuesta2-routing.module';

import { Respuesta2Page } from './respuesta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Respuesta2PageRoutingModule
  ],
  declarations: [Respuesta2Page]
})
export class Respuesta2PageModule {}
