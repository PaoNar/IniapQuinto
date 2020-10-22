import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasmoradasImagePageRoutingModule } from './hojasmoradas-image-routing.module';

import { HojasmoradasImagePage } from './hojasmoradas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasmoradasImagePageRoutingModule
  ],
  declarations: [HojasmoradasImagePage]
})
export class HojasmoradasImagePageModule {}
