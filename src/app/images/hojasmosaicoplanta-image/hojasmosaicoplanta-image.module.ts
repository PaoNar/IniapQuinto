import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmosaicoplantaImagePageRoutingModule } from './hojasmosaicoplanta-image-routing.module';

import { HojasmosaicoplantaImagePage } from './hojasmosaicoplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmosaicoplantaImagePageRoutingModule
  ],
  declarations: [HojasmosaicoplantaImagePage]
})
export class HojasmosaicoplantaImagePageModule {}
