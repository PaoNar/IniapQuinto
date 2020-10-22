import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostranegraImagePageRoutingModule } from './costranegra-image-routing.module';

import { CostranegraImagePage } from './costranegra-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostranegraImagePageRoutingModule
  ],
  declarations: [CostranegraImagePage]
})
export class CostranegraImagePageModule {}
