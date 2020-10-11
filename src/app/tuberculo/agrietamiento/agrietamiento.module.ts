import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrietamientoPageRoutingModule } from './agrietamiento-routing.module';

import { AgrietamientoPage } from './agrietamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrietamientoPageRoutingModule
  ],
  declarations: [AgrietamientoPage]
})
export class AgrietamientoPageModule {}
