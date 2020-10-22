import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeladaImagePageRoutingModule } from './helada-image-routing.module';

import { HeladaImagePage } from './helada-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeladaImagePageRoutingModule
  ],
  declarations: [HeladaImagePage]
})
export class HeladaImagePageModule {}
