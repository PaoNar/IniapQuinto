import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PustulasImagePageRoutingModule } from './pustulas-image-routing.module';

import { PustulasImagePage } from './pustulas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PustulasImagePageRoutingModule
  ],
  declarations: [PustulasImagePage]
})
export class PustulasImagePageModule {}
