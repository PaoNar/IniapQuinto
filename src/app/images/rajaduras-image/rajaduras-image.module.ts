import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RajadurasImagePageRoutingModule } from './rajaduras-image-routing.module';

import { RajadurasImagePage } from './rajaduras-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RajadurasImagePageRoutingModule
  ],
  declarations: [RajadurasImagePage]
})
export class RajadurasImagePageModule {}
