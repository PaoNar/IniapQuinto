import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PustulasModalPageRoutingModule } from './pustulas-modal-routing.module';

import { PustulasModalPage } from './pustulas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PustulasModalPageRoutingModule
  ],
  declarations: [PustulasModalPage]
})
export class PustulasModalPageModule {}
