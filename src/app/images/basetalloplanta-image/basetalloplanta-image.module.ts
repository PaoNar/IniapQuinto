import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasetalloplantaImagePageRoutingModule } from './basetalloplanta-image-routing.module';

import { BasetalloplantaImagePage } from './basetalloplanta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasetalloplantaImagePageRoutingModule
  ],
  declarations: [BasetalloplantaImagePage]
})
export class BasetalloplantaImagePageModule {}
