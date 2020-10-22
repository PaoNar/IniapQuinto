import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaizModalPageRoutingModule } from './raiz-modal-routing.module';

import { RaizModalPage } from './raiz-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaizModalPageRoutingModule
  ],
  declarations: [RaizModalPage]
})
export class RaizModalPageModule {}
