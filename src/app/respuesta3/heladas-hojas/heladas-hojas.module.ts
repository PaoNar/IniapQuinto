import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeladasHojasPageRoutingModule } from './heladas-hojas-routing.module';

import { HeladasHojasPage } from './heladas-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeladasHojasPageRoutingModule
  ],
  declarations: [HeladasHojasPage]
})
export class HeladasHojasPageModule {}
