import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciatuberculosImagePageRoutingModule } from './presenciatuberculos-image-routing.module';

import { PresenciatuberculosImagePage } from './presenciatuberculos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciatuberculosImagePageRoutingModule
  ],
  declarations: [PresenciatuberculosImagePage]
})
export class PresenciatuberculosImagePageModule {}
