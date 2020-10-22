import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmpollasModalPageRoutingModule } from './ampollas-modal-routing.module';

import { AmpollasModalPage } from './ampollas-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmpollasModalPageRoutingModule
  ],
  declarations: [AmpollasModalPage]
})
export class AmpollasModalPageModule {}
