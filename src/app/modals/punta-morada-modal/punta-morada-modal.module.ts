import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntaMoradaModalPageRoutingModule } from './punta-morada-modal-routing.module';

import { PuntaMoradaModalPage } from './punta-morada-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntaMoradaModalPageRoutingModule
  ],
  declarations: [PuntaMoradaModalPage]
})
export class PuntaMoradaModalPageModule {}
