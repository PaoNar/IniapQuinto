import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Respuesta3PageRoutingModule } from './respuesta3-routing.module';

import { Respuesta3Page } from './respuesta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Respuesta3PageRoutingModule
  ],
  declarations: [Respuesta3Page]
})
export class Respuesta3PageModule {}
