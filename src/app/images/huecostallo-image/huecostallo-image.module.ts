import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuecostalloImagePageRoutingModule } from './huecostallo-image-routing.module';

import { HuecostalloImagePage } from './huecostallo-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuecostalloImagePageRoutingModule
  ],
  declarations: [HuecostalloImagePage]
})
export class HuecostalloImagePageModule {}
