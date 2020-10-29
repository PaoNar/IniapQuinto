import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Respuesta3hojasPageRoutingModule } from './respuesta3hojas-routing.module';

import { Respuesta3hojasPage } from './respuesta3hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Respuesta3hojasPageRoutingModule
  ],
  declarations: [Respuesta3hojasPage]
})
export class Respuesta3hojasPageModule {}
