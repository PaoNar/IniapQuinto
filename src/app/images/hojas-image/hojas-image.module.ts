import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasImagePageRoutingModule } from './hojas-image-routing.module';

import { HojasImagePage } from './hojas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasImagePageRoutingModule
  ],
  declarations: [HojasImagePage]
})
export class HojasImagePageModule {}
