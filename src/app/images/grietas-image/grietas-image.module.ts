import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrietasImagePageRoutingModule } from './grietas-image-routing.module';

import { GrietasImagePage } from './grietas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrietasImagePageRoutingModule
  ],
  declarations: [GrietasImagePage]
})
export class GrietasImagePageModule {}
