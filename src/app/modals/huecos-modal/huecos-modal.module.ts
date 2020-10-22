import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuecosModalPageRoutingModule } from './huecos-modal-routing.module';

import { HuecosModalPage } from './huecos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuecosModalPageRoutingModule
  ],
  declarations: [HuecosModalPage]
})
export class HuecosModalPageModule {}
