import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CavidadinternaImagePageRoutingModule } from './cavidadinterna-image-routing.module';

import { CavidadinternaImagePage } from './cavidadinterna-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CavidadinternaImagePageRoutingModule
  ],
  declarations: [CavidadinternaImagePage]
})
export class CavidadinternaImagePageModule {}
