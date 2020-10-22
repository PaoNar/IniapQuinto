import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoyaModalPageRoutingModule } from './roya-modal-routing.module';

import { RoyaModalPage } from './roya-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoyaModalPageRoutingModule
  ],
  declarations: [RoyaModalPage]
})
export class RoyaModalPageModule {}
