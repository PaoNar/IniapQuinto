import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenciaAgallasModalPageRoutingModule } from './presencia-agallas-modal-routing.module';

import { PresenciaAgallasModalPage } from './presencia-agallas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenciaAgallasModalPageRoutingModule
  ],
  declarations: [PresenciaAgallasModalPage]
})
export class PresenciaAgallasModalPageModule {}
