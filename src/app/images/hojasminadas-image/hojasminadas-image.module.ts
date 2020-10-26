import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasminadasImagePageRoutingModule } from './hojasminadas-image-routing.module';

import { HojasminadasImagePage } from './hojasminadas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasminadasImagePageRoutingModule
  ],
  declarations: [HojasminadasImagePage]
})
export class HojasminadasImagePageModule {}
