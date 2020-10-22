import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SarnapolvorientaImagePageRoutingModule } from './sarnapolvorienta-image-routing.module';

import { SarnapolvorientaImagePage } from './sarnapolvorienta-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SarnapolvorientaImagePageRoutingModule
  ],
  declarations: [SarnapolvorientaImagePage]
})
export class SarnapolvorientaImagePageModule {}
