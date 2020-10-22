import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolillaModalPageRoutingModule } from './polilla-modal-routing.module';

import { PolillaModalPage } from './polilla-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolillaModalPageRoutingModule
  ],
  declarations: [PolillaModalPage]
})
export class PolillaModalPageModule {}
