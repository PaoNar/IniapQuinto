import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciabolitasraizImagePageRoutingModule } from './presenciabolitasraiz-image-routing.module';

import { PresenciabolitasraizImagePage } from './presenciabolitasraiz-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciabolitasraizImagePageRoutingModule
  ],
  declarations: [PresenciabolitasraizImagePage]
})
export class PresenciabolitasraizImagePageModule {}
