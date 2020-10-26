import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulguillaModalPageRoutingModule } from './pulguilla-modal-routing.module';

import { PulguillaModalPage } from './pulguilla-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulguillaModalPageRoutingModule
  ],
  declarations: [PulguillaModalPage]
})
export class PulguillaModalPageModule {}
