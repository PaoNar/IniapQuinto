import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PudricionModalPageRoutingModule } from './pudricion-modal-routing.module';

import { PudricionModalPage } from './pudricion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PudricionModalPageRoutingModule
  ],
  declarations: [PudricionModalPage]
})
export class PudricionModalPageModule {}
