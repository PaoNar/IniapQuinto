import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostranegraPageRoutingModule } from './costranegra-routing.module';

import { CostranegraPage } from './costranegra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostranegraPageRoutingModule
  ],
  declarations: [CostranegraPage]
})
export class CostranegraPageModule {}
