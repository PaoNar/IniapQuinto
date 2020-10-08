import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirosisPageRoutingModule } from './virosis-routing.module';

import { VirosisPage } from './virosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirosisPageRoutingModule
  ],
  declarations: [VirosisPage]
})
export class VirosisPageModule {}
