import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmosaicoImagePageRoutingModule } from './hojasmosaico-image-routing.module';

import { HojasmosaicoImagePage } from './hojasmosaico-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmosaicoImagePageRoutingModule
  ],
  declarations: [HojasmosaicoImagePage]
})
export class HojasmosaicoImagePageModule {}
