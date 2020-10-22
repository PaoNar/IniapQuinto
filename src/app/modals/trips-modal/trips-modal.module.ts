import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsModalPageRoutingModule } from './trips-modal-routing.module';

import { TripsModalPage } from './trips-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsModalPageRoutingModule
  ],
  declarations: [TripsModalPage]
})
export class TripsModalPageModule {}
