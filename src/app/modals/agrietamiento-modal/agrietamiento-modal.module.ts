import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrietamientoModalPageRoutingModule } from './agrietamiento-modal-routing.module';

import { AgrietamientoModalPage } from './agrietamiento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrietamientoModalPageRoutingModule
  ],
  declarations: [AgrietamientoModalPage]
})
export class AgrietamientoModalPageModule {}
