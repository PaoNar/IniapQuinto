import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanchaPageRoutingModule } from './lancha-routing.module';

import { LanchaPage } from './lancha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanchaPageRoutingModule
  ],
  declarations: [LanchaPage]
})
export class LanchaPageModule {}
