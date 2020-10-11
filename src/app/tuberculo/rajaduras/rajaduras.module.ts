import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RajadurasPageRoutingModule } from './rajaduras-routing.module';

import { RajadurasPage } from './rajaduras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RajadurasPageRoutingModule
  ],
  declarations: [RajadurasPage]
})
export class RajadurasPageModule {}
