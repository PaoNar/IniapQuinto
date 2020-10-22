import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrrollamientoImagePageRoutingModule } from './enrrollamiento-image-routing.module';

import { EnrrollamientoImagePage } from './enrrollamiento-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrrollamientoImagePageRoutingModule
  ],
  declarations: [EnrrollamientoImagePage]
})
export class EnrrollamientoImagePageModule {}
