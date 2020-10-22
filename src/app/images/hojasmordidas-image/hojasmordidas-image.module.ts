import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmordidasImagePageRoutingModule } from './hojasmordidas-image-routing.module';

import { HojasmordidasImagePage } from './hojasmordidas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmordidasImagePageRoutingModule
  ],
  declarations: [HojasmordidasImagePage]
})
export class HojasmordidasImagePageModule {}
