import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RajadurasModalPageRoutingModule } from './rajaduras-modal-routing.module';

import { RajadurasModalPage } from './rajaduras-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RajadurasModalPageRoutingModule
  ],
  declarations: [RajadurasModalPage]
})
export class RajadurasModalPageModule {}
