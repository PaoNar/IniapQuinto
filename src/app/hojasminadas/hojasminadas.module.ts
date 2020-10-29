import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojasminadasPageRoutingModule } from './hojasminadas-routing.module';

import { HojasminadasPage } from './hojasminadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojasminadasPageRoutingModule
  ],
  declarations: [HojasminadasPage]
})
export class HojasminadasPageModule {}
