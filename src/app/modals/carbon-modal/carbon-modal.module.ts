import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarbonModalPageRoutingModule } from './carbon-modal-routing.module';

import { CarbonModalPage } from './carbon-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarbonModalPageRoutingModule
  ],
  declarations: [CarbonModalPage]
})
export class CarbonModalPageModule {}
