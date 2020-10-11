import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaInsectosPageRoutingModule } from './respuesta-insectos-routing.module';

import { RespuestaInsectosPage } from './respuesta-insectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaInsectosPageRoutingModule
  ],
  declarations: [RespuestaInsectosPage]
})
export class RespuestaInsectosPageModule {}
