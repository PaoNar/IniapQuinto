import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngrosamientoImagePageRoutingModule } from './engrosamiento-image-routing.module';

import { EngrosamientoImagePage } from './engrosamiento-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngrosamientoImagePageRoutingModule
  ],
  declarations: [EngrosamientoImagePage]
})
export class EngrosamientoImagePageModule {}
