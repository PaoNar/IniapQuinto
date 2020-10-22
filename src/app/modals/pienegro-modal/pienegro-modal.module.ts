import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PienegroModalPageRoutingModule } from './pienegro-modal-routing.module';

import { PienegroModalPage } from './pienegro-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PienegroModalPageRoutingModule
  ],
  declarations: [PienegroModalPage]
})
export class PienegroModalPageModule {}
