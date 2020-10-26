import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciaagallasImagePageRoutingModule } from './presenciaagallas-image-routing.module';

import { PresenciaagallasImagePage } from './presenciaagallas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciaagallasImagePageRoutingModule
  ],
  declarations: [PresenciaagallasImagePage]
})
export class PresenciaagallasImagePageModule {}
