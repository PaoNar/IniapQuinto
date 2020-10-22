import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GusanoBlancoModalPageRoutingModule } from './gusano-blanco-modal-routing.module';

import { GusanoBlancoModalPage } from './gusano-blanco-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GusanoBlancoModalPageRoutingModule
  ],
  declarations: [GusanoBlancoModalPage]
})
export class GusanoBlancoModalPageModule {}
