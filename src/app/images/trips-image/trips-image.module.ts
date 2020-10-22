import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsImagePageRoutingModule } from './trips-image-routing.module';

import { TripsImagePage } from './trips-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsImagePageRoutingModule
  ],
  declarations: [TripsImagePage]
})
export class TripsImagePageModule {}
