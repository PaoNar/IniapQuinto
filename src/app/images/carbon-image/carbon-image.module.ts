import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarbonImagePageRoutingModule } from './carbon-image-routing.module';

import { CarbonImagePage } from './carbon-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarbonImagePageRoutingModule
  ],
  declarations: [CarbonImagePage]
})
export class CarbonImagePageModule {}
