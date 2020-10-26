import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaizImagePageRoutingModule } from './raiz-image-routing.module';

import { RaizImagePage } from './raiz-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaizImagePageRoutingModule
  ],
  declarations: [RaizImagePage]
})
export class RaizImagePageModule {}
