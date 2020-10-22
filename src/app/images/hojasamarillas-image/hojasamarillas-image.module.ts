import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasamarillasImagePageRoutingModule } from './hojasamarillas-image-routing.module';

import { HojasamarillasImagePage } from './hojasamarillas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasamarillasImagePageRoutingModule
  ],
  declarations: [HojasamarillasImagePage]
})
export class HojasamarillasImagePageModule {}
