import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoscaMinadoraModalPageRoutingModule } from './mosca-minadora-modal-routing.module';

import { MoscaMinadoraModalPage } from './mosca-minadora-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoscaMinadoraModalPageRoutingModule
  ],
  declarations: [MoscaMinadoraModalPage]
})
export class MoscaMinadoraModalPageModule {}
