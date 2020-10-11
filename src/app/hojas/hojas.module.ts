import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasPageRoutingModule } from './hojas-routing.module';

import { HojasPage } from './hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasPageRoutingModule
  ],
  declarations: [HojasPage]
})
export class HojasPageModule {}
