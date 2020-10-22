import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulguillaImagePageRoutingModule } from './pulguilla-image-routing.module';

import { PulguillaImagePage } from './pulguilla-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulguillaImagePageRoutingModule
  ],
  declarations: [PulguillaImagePage]
})
export class PulguillaImagePageModule {}
