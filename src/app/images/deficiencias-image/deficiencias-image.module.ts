import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeficienciasImagePageRoutingModule } from './deficiencias-image-routing.module';

import { DeficienciasImagePage } from './deficiencias-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeficienciasImagePageRoutingModule
  ],
  declarations: [DeficienciasImagePage]
})
export class DeficienciasImagePageModule {}
