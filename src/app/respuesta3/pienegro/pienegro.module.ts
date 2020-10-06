import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PienegroPageRoutingModule } from './pienegro-routing.module';

import { PienegroPage } from './pienegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PienegroPageRoutingModule
  ],
  declarations: [PienegroPage]
})
export class PienegroPageModule {}
