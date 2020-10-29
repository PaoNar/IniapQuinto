import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GusanoblancoModalPageRoutingModule } from './gusanoblanco-modal-routing.module';

import { GusanoblancoModalPage } from './gusanoblanco-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GusanoblancoModalPageRoutingModule
  ],
  declarations: [GusanoblancoModalPage]
})
export class GusanoblancoModalPageModule {}
