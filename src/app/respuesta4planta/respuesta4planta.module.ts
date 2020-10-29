import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Respuesta4plantaPageRoutingModule } from './respuesta4planta-routing.module';

import { Respuesta4plantaPage } from './respuesta4planta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Respuesta4plantaPageRoutingModule
  ],
  declarations: [Respuesta4plantaPage]
})
export class Respuesta4plantaPageModule {}
