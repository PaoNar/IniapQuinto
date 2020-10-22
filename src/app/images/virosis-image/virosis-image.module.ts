import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirosisImagePageRoutingModule } from './virosis-image-routing.module';

import { VirosisImagePage } from './virosis-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirosisImagePageRoutingModule
  ],
  declarations: [VirosisImagePage]
})
export class VirosisImagePageModule {}
