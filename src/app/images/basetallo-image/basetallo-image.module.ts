import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasetalloImagePageRoutingModule } from './basetallo-image-routing.module';

import { BasetalloImagePage } from './basetallo-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasetalloImagePageRoutingModule
  ],
  declarations: [BasetalloImagePage]
})
export class BasetalloImagePageModule {}
