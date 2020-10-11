import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallosPageRoutingModule } from './tallos-routing.module';

import { TallosPage } from './tallos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallosPageRoutingModule
  ],
  declarations: [TallosPage]
})
export class TallosPageModule {}
