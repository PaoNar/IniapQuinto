import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojascomidasImagePageRoutingModule } from './hojascomidas-image-routing.module';

import { HojascomidasImagePage } from './hojascomidas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojascomidasImagePageRoutingModule
  ],
  declarations: [HojascomidasImagePage]
})
export class HojascomidasImagePageModule {}
