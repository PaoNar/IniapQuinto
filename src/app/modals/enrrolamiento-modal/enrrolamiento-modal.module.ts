import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrrolamientoModalPageRoutingModule } from './enrrolamiento-modal-routing.module';

import { EnrrolamientoModalPage } from './enrrolamiento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrrolamientoModalPageRoutingModule
  ],
  declarations: [EnrrolamientoModalPage]
})
export class EnrrolamientoModalPageModule {}
