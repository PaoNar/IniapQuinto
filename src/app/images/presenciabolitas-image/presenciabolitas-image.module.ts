import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciabolitasImagePageRoutingModule } from './presenciabolitas-image-routing.module';

import { PresenciabolitasImagePage } from './presenciabolitas-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciabolitasImagePageRoutingModule
  ],
  declarations: [PresenciabolitasImagePage]
})
export class PresenciabolitasImagePageModule {}
