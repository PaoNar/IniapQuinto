import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PienegroHojasPageRoutingModule } from './pienegro-hojas-routing.module';

import { PienegroHojasPage } from './pienegro-hojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PienegroHojasPageRoutingModule
  ],
  declarations: [PienegroHojasPage]
})
export class PienegroHojasPageModule {}
