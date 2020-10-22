import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirosisModalPageRoutingModule } from './virosis-modal-routing.module';

import { VirosisModalPage } from './virosis-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirosisModalPageRoutingModule
  ],
  declarations: [VirosisModalPage]
})
export class VirosisModalPageModule {}
