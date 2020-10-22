import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyaImagePageRoutingModule } from './roya-image-routing.module';

import { RoyaImagePage } from './roya-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyaImagePageRoutingModule
  ],
  declarations: [RoyaImagePage]
})
export class RoyaImagePageModule {}
