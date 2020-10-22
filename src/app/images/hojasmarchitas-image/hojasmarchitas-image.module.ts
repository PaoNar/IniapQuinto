import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmarchitasImagePageRoutingModule } from './hojasmarchitas-image-routing.module';

import { HojasmarchitasImagePage } from './hojasmarchitas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmarchitasImagePageRoutingModule
  ],
  declarations: [HojasmarchitasImagePage]
})
export class HojasmarchitasImagePageModule {}
