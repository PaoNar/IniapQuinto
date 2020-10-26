import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PudricionImagePageRoutingModule } from './pudricion-image-routing.module';

import { PudricionImagePage } from './pudricion-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PudricionImagePageRoutingModule
  ],
  declarations: [PudricionImagePage]
})
export class PudricionImagePageModule {}
