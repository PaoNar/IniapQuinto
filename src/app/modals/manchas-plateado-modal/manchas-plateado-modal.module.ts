import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchasPlateadoModalPageRoutingModule } from './manchas-plateado-modal-routing.module';

import { ManchasPlateadoModalPage } from './manchas-plateado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchasPlateadoModalPageRoutingModule
  ],
  declarations: [ManchasPlateadoModalPage]
})
export class ManchasPlateadoModalPageModule {}
