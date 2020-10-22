import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasManchasPageRoutingModule } from './hojas-manchas-routing.module';

import { HojasManchasPage } from './hojas-manchas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasManchasPageRoutingModule
  ],
  declarations: [HojasManchasPage]
})
export class HojasManchasPageModule {}
