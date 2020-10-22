import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanchaImagePageRoutingModule } from './lancha-image-routing.module';

import { LanchaImagePage } from './lancha-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanchaImagePageRoutingModule
  ],
  declarations: [LanchaImagePage]
})
export class LanchaImagePageModule {}
