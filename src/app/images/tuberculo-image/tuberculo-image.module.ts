import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuberculoImagePageRoutingModule } from './tuberculo-image-routing.module';

import { TuberculoImagePage } from './tuberculo-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuberculoImagePageRoutingModule
  ],
  declarations: [TuberculoImagePage]
})
export class TuberculoImagePageModule {}
