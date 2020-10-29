import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmanchasplantaImagePageRoutingModule } from './hojasmanchasplanta-image-routing.module';

import { HojasmanchasplantaImagePage } from './hojasmanchasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmanchasplantaImagePageRoutingModule
  ],
  declarations: [HojasmanchasplantaImagePage]
})
export class HojasmanchasplantaImagePageModule {}
