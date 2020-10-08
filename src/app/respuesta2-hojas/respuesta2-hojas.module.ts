import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Respuesta2HojasPageRoutingModule } from './respuesta2-hojas-routing.module';

import { Respuesta2HojasPage } from './respuesta2-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Respuesta2HojasPageRoutingModule
  ],
  declarations: [Respuesta2HojasPage]
})
export class Respuesta2HojasPageModule {}
