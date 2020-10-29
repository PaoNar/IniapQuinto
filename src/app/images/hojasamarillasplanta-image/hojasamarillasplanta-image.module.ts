import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasamarillasplantaImagePageRoutingModule } from './hojasamarillasplanta-image-routing.module';

import { HojasamarillasplantaImagePage } from './hojasamarillasplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasamarillasplantaImagePageRoutingModule
  ],
  declarations: [HojasamarillasplantaImagePage]
})
export class HojasamarillasplantaImagePageModule {}
