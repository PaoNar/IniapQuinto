import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManchaNegraModalPageRoutingModule } from './mancha-negra-modal-routing.module';

import { ManchaNegraModalPage } from './mancha-negra-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManchaNegraModalPageRoutingModule
  ],
  declarations: [ManchaNegraModalPage]
})
export class ManchaNegraModalPageModule {}
