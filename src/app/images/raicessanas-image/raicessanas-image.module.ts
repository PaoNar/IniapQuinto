import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaicessanasImagePageRoutingModule } from './raicessanas-image-routing.module';

import { RaicessanasImagePage } from './raicessanas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaicessanasImagePageRoutingModule
  ],
  declarations: [RaicessanasImagePage]
})
export class RaicessanasImagePageModule {}
