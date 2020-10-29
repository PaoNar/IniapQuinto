import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmoradasplantaImagePageRoutingModule } from './hojasmoradasplanta-image-routing.module';

import { HojasmoradasplantaImagePage } from './hojasmoradasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmoradasplantaImagePageRoutingModule
  ],
  declarations: [HojasmoradasplantaImagePage]
})
export class HojasmoradasplantaImagePageModule {}
