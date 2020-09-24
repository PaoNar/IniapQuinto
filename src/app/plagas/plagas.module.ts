import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlagasPageRoutingModule } from './plagas-routing.module';

import { PlagasPage } from './plagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlagasPageRoutingModule
  ],
  declarations: [PlagasPage]
})
export class PlagasPageModule {}
