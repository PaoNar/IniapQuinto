import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrietamientoImagePageRoutingModule } from './agrietamiento-image-routing.module';

import { AgrietamientoImagePage } from './agrietamiento-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrietamientoImagePageRoutingModule
  ],
  declarations: [AgrietamientoImagePage]
})
export class AgrietamientoImagePageModule {}
