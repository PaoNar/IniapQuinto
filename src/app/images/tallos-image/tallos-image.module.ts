import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallosImagePageRoutingModule } from './tallos-image-routing.module';

import { TallosImagePage } from './tallos-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallosImagePageRoutingModule
  ],
  declarations: [TallosImagePage]
})
export class TallosImagePageModule {}
