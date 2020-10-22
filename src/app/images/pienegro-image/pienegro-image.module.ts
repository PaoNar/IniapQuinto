import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PienegroImagePageRoutingModule } from './pienegro-image-routing.module';

import { PienegroImagePage } from './pienegro-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PienegroImagePageRoutingModule
  ],
  declarations: [PienegroImagePage]
})
export class PienegroImagePageModule {}
