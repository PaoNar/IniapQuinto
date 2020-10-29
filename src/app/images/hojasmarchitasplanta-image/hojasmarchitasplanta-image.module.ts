import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmarchitasplantaImagePageRoutingModule } from './hojasmarchitasplanta-image-routing.module';

import { HojasmarchitasplantaImagePage } from './hojasmarchitasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmarchitasplantaImagePageRoutingModule
  ],
  declarations: [HojasmarchitasplantaImagePage]
})
export class HojasmarchitasplantaImagePageModule {}
