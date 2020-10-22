import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmanchasImagePageRoutingModule } from './hojasmanchas-image-routing.module';

import { HojasmanchasImagePage } from './hojasmanchas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmanchasImagePageRoutingModule
  ],
  declarations: [HojasmanchasImagePage]
})
export class HojasmanchasImagePageModule {}
