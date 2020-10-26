import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuecosImagePageRoutingModule } from './huecos-image-routing.module';

import { HuecosImagePage } from './huecos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuecosImagePageRoutingModule
  ],
  declarations: [HuecosImagePage]
})
export class HuecosImagePageModule {}
