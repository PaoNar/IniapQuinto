import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciatuberculosPageRoutingModule } from './presenciatuberculos-routing.module';

import { PresenciatuberculosPage } from './presenciatuberculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciatuberculosPageRoutingModule
  ],
  declarations: [PresenciatuberculosPage]
})
export class PresenciatuberculosPageModule {}
