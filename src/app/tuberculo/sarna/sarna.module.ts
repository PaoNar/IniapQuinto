import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SarnaPageRoutingModule } from './sarna-routing.module';

import { SarnaPage } from './sarna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SarnaPageRoutingModule
  ],
  declarations: [SarnaPage]
})
export class SarnaPageModule {}
