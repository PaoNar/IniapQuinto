import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanosfisiologicosImagePageRoutingModule } from './danosfisiologicos-image-routing.module';

import { DanosfisiologicosImagePage } from './danosfisiologicos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanosfisiologicosImagePageRoutingModule
  ],
  declarations: [DanosfisiologicosImagePage]
})
export class DanosfisiologicosImagePageModule {}
