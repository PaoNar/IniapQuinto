import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmpollasImagePageRoutingModule } from './ampollas-image-routing.module';

import { AmpollasImagePage } from './ampollas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmpollasImagePageRoutingModule
  ],
  declarations: [AmpollasImagePage]
})
export class AmpollasImagePageModule {}
