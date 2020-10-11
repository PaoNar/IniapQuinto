import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GusanoBlancoPageRoutingModule } from './gusano-blanco-routing.module';

import { GusanoBlancoPage } from './gusano-blanco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GusanoBlancoPageRoutingModule
  ],
  declarations: [GusanoBlancoPage]
})
export class GusanoBlancoPageModule {}
