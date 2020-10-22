import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanosfisiologicosModalPageRoutingModule } from './danosfisiologicos-modal-routing.module';

import { DanosfisiologicosModalPage } from './danosfisiologicos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanosfisiologicosModalPageRoutingModule
  ],
  declarations: [DanosfisiologicosModalPage]
})
export class DanosfisiologicosModalPageModule {}
