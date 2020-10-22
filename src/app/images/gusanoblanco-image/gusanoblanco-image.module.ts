import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GusanoblancoImagePageRoutingModule } from './gusanoblanco-image-routing.module';

import { GusanoblancoImagePage } from './gusanoblanco-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GusanoblancoImagePageRoutingModule
  ],
  declarations: [GusanoblancoImagePage]
})
export class GusanoblancoImagePageModule {}
