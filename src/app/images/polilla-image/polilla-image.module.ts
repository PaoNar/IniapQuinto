import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolillaImagePageRoutingModule } from './polilla-image-routing.module';

import { PolillaImagePage } from './polilla-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolillaImagePageRoutingModule
  ],
  declarations: [PolillaImagePage]
})
export class PolillaImagePageModule {}
