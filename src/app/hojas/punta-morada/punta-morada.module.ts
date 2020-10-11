import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntaMoradaPageRoutingModule } from './punta-morada-routing.module';

import { PuntaMoradaPage } from './punta-morada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntaMoradaPageRoutingModule
  ],
  declarations: [PuntaMoradaPage]
})
export class PuntaMoradaPageModule {}
